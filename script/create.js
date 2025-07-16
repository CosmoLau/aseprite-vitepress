// scripts/copy-docs.js
import fs from 'fs-extra'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * 检查目录是否是 Git 子模块，并初始化（如果未下载）
 */
function ensureSubmodule(dir) {
    try {
        const gitDir = path.join(dir, '.git')
        if (fs.existsSync(gitDir)) {
            console.log(`ℹ️ ${dir} is a submodule, checking if initialized...`)
            const status = execSync(`git submodule status ${dir}`, { encoding: 'utf8' })
            if (status.startsWith('-')) {
                console.log(`🔧 Initializing submodule: ${dir}`)
                execSync(`git submodule update --init ${dir}`, { stdio: 'inherit' })
            }
        }
    } catch (err) {
        console.error(`❌ Failed to check submodule ${dir}:`, err)
        process.exit(1)
    }
}

async function copyFiles(targetDir) {
    const rootDir = path.join(__dirname, '..')
    const filesToCopy = ['docs', 'api', 'config/config.mts', 'config/index.md']

    // 检查子模块
    if (fs.existsSync(path.join(rootDir, 'docs'))) {
        ensureSubmodule(path.join(rootDir, 'docs'))
    }
    if (fs.existsSync(path.join(rootDir, 'api'))) {
        ensureSubmodule(path.join(rootDir, 'api'))
    }

    // 复制文件
    await fs.ensureDir(targetDir)
    for (const file of filesToCopy) {
        const src = path.join(rootDir, file)
        if (fs.existsSync(src)) {
            
            if (file == 'config/index.md' || file == 'config/config.mts') {
                let filePath = file.replace('config/', '');
                await fs.copy(src, path.join(rootDir, targetDir, filePath));
                console.log(`✅ Copied: ${file} → ${targetDir}/${filePath}`)
                let srcFile = path.join(rootDir, targetDir, filePath);
                let content = fs.readFileSync(srcFile, 'utf8');
                content = content.replace(/\{lang\}/g, targetDir);
                fs.writeFileSync(srcFile, content);
            }
            else {
                await fs.copy(src, path.join(rootDir, targetDir, file))
                console.log(`✅ Copied: ${file} → ${targetDir}/${file}`)
            }
        } else {
            console.log(`⚠️ Skipped: ${file} (not found)`)
        }
    }
}

const targetDir = process.argv[2]
if (!targetDir) {
    console.error('❌ Usage: npm run create <your language>')
    process.exit(1)
}

copyFiles(targetDir).catch(console.error)