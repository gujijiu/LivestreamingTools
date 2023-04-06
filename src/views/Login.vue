<script setup lang="ts">
import { reactive, toRefs,markRaw,onMounted,onBeforeUnmount  } from 'vue'
import { useStore } from '@/store'
import router from '@/router'
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

onMounted(()=>{
    // 添加背景
    document.body.style.backgroundColor = '#f0f3f8';
    // console.log(this)
})
  // 离开VUE时调用的钩子函数
onBeforeUnmount(()=>{
    // 清除背景图片
    document.body.style.backgroundColor = ''
})
</script>

<template>
<div class="Login">
    <div class="Login-header">
        <div class="Login-tittle">
            <span class="Tittle-span">欢迎登录</span>
        </div>
    </div>
    <div class="Login-main">
        
        <el-button @click="router.push({ name: 'Home' })">登录</el-button>
    </div>
    <div class="Login-footer">

    </div>
</div>
</template>

<style scoped lang="scss">
.Login{
    width: 450px;
    height: 350px;
    background-color: aquamarine;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    .Login-tittle{
        text-align: center;
        
        .Tittle-span{
            font-size: 20px;
            font-weight: 600;
        }
    }
}
</style>