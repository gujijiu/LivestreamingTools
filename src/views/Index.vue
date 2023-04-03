<script setup lang="ts">
import Header from "../components/Header.vue"
import Main from "../components/Main.vue"
import Footer from "../components/Footer.vue"
import Subtitle from "../pages/Subtitle/index.vue"
import {ref,reactive,toRef} from 'vue'
import router from '../router'
import {useStore} from '../store'
import Voice from "../pages/Voice/index.vue"

// let page = reactive([{
//   name:"Subtitle",
//   com:Subtitle
// },
// {
//   name:"Voice",
//   com:Voice
// },
// {

// }])
// const componentDisplay:boolean = true
// console.log(defineStore)
const ToolPlateList = useStore()
// let page = eval(ToolPlateList.indexComponent)
const pageChange = (pageName:string,e:Event) => {
  console.log(pageName,e)
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header /></el-header>
      <el-main><Main/></el-main>
      <keep-alive>
        <component v-if="ToolPlateList.indexComponentDisplay" :is="ToolPlateList.indexComponent"></component>
      </keep-alive>
      <!-- {{ ToolPlateList.indexComponentDisplay }}{{ ToolPlateList.indexComponent  }}<button @click="ToolPlateList.indexComponentDisplay=!ToolPlateList.indexComponentDisplay">{{ ToolPlateList.indexComponent  }}</button> -->
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
