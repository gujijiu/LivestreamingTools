<script setup lang="ts">
import { reactive, toRefs,markRaw } from 'vue'
import { useStore } from '@/store'
// import {  } from '@/router'
import Header from "@/components/main/header.vue"
import Footer from "@/components/main/footer.vue"
</script>

<template>
    <div>
        <el-header><Header /></el-header>
        <el-main>
            
        </el-main>
        <el-footer><Footer /></el-footer>
    </div>
</template>

<style scoped>

</style>