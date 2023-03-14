<template>
    <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="item in carouseData" :key="item">
      <el-image :src="item.url" fit="contain" alt=""/>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
const carouseData = [
  {url: "./public/img/0 (1).jpg"},
  {url: "./public/img/0 (2).jpg"},
  {url: "./public/img/0 (3).jpg"},
  {url: "./public/img/0 (4).jpg"},
  {url: "./public/img/0 (5).jpg"},
  {url: "./public/img/0 (6).jpg"},
]
</script>

<style scoped>

</style>