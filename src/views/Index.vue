<script setup lang="ts">
import Header from "../components/Header.vue"
import Main from "../components/Main.vue"
import Footer from "../components/Footer.vue"
import Subtitle from "../pages/Subtitle/index.vue"
import {ref} from 'vue'
// import Voice from "../pages/Voice/index.vue"

const page = ref('Subtitle')
const componentDisplay:boolean = false
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header /></el-header>
      <el-main><Main /></el-main>
      <router-link v-if="componentDisplay" :to="{path:'./'+page}"></router-link>
      <!-- <Subtitle></Subtitle> -->
      <!-- <el-text v-once="true">只渲染一次组件</el-text> -->
      <!-- <el-text v-memo:="[a = 1]">配合v-for使用，只渲染符合条件时的组件</el-text> -->
      <!-- <Voice></Voice> -->
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>

<style scoped>

</style>
