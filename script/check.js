#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

// 获取当前文件路径
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 创建命令行交互接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 主函数
async function main() {
  const targetDir = process.argv[2];

  if (!targetDir) {
    console.error('❌ Please specify the target folder, for example: npm run check language-folder');
    process.exit(1);
  }

  // 定义要检查的文件夹
  const foldersToCheck = ['docs', 'api'];

  // 检查并列出缺少的文件
  const missingFiles = await checkMissingFiles(targetDir, foldersToCheck);

  if (missingFiles.length === 0) {
    console.log('✅ All files already exist. No need to copy.');
    process.exit(0);
  }

  // 打印缺少的文件
  console.log('\n❌ The following files are missing:');
  missingFiles.forEach(file => console.log(`- ${file}`));

  // 询问用户是否复制
  const answer = await askQuestion('\nDo you want to copy these files? (y/n): ');

  if (answer.toLowerCase() === 'y') {
    await copyFiles(missingFiles, targetDir);
    console.log('✅ File copying completed!');
  } else {
    console.log('🚫 No files were copied.');
  }

  rl.close();
}

/**
 * 检查目标文件夹中缺少的文件
 */
async function checkMissingFiles(targetDir, foldersToCheck) {
  const missingFiles = [];

  for (const folder of foldersToCheck) {
    const sourceDir = path.join(__dirname, '..', folder);
    const targetSubDir = path.join(__dirname, '..', targetDir, folder);

    try {
      // 获取源文件夹和目标文件夹的文件列表
      const sourceFiles = await getFilesInDir(sourceDir);
      const targetFiles = await getFilesInDir(targetSubDir);

      // 找出缺失的文件
      for (const file of sourceFiles) {
        const relativePath = path.relative(sourceDir, file);
        const targetFile = path.join(targetSubDir, relativePath);

        if (!targetFiles.includes(targetFile)) {
          missingFiles.push(file);
        }
      }
    } catch (err) {
      console.error(`⚠️ Error checking ${folder}:`, err.message);
    }
  }

  return missingFiles;
}

/**
 * 获取目录下的所有文件（递归）
 */
async function getFilesInDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    return []; // 如果目录不存在，返回空数组
  }

  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subFiles = await getFilesInDir(fullPath);
      files.push(...subFiles);
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * 复制缺失的文件到目标文件夹
 */
async function copyFiles(missingFiles, targetDir) {
  for (const file of missingFiles) {
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    const targetFile = path.join(__dirname, '..', targetDir, relativePath);

    // 确保目标目录存在
    await fs.mkdir(path.dirname(targetFile), { recursive: true });

    // 复制文件
    await fs.copyFile(file, targetFile);
    console.log(`📄 Copied: ${relativePath}`);
  }
}

/**
 * 询问用户问题
 */
function askQuestion(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer);
    });
  });
}

main().catch(err => {
  console.error('❌ Script error:', err);
  process.exit(1);
});