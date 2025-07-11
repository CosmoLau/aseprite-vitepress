<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #home-hero-before>
            <div style="min-height: 400px; width: 100%; min-width: 100%; background: url('/header-bg.png'); background-size: 100%; background-repeat: no-repeat; overflow: hidden; text-align: center;">
                <div style="padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;">
                    <img src="/header-logo.png"
                        style="display: block;max-width: 100%; height: auto; margin: auto; margin-top: 32px; vertical-align: middle;" />
                    <img src="/header-title.png"
                        style="display: block;max-width: 100%; height: auto; margin: auto; margin-top: 32px; vertical-align: middle;" />
                </div>
            </div>
        </template>
    </Layout>
</template>

<style>
.banner {
    min-height: 400px;
    width: 100%;
    min-width: 100%;
    background: url('/header-bg.png');
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    text-align: center;
}

h1 .feature {
    font-size: 24px;
    width: 100%;
    display: block;
    padding: 16px;
    color: #ffffff;
    text-align: center;
    background-color: #7d929e;
    margin-top: 0px;
    margin-bottom: 0px;
}
</style>