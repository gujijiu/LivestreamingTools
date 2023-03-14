<script setup lang="ts">
import { reactive, toRefs } from 'vue'

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
  toolNames: [[
    {
        name: '语音转字幕',
        type: 'square',
        imgUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    },
  ]],
})

const { circleUrl, squareUrl, sizeList,toolNames } = toRefs(state)
</script>

<template>
  <el-row :gutter="20" v-for="items in toolNames" :key="items">
    <el-col :span="6" v-for="item in items" :key="item"><div class="grid-content ep-bg-purple" >
        <el-avatar :shape="item.type" :size="50" :src="item.imgUrl" />
        <el-text class="mx-1" type="primary">{{item.name}}</el-text>
        </div>
    </el-col>
    <!-- <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col> -->
  </el-row>  
</template>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
  }
  
  .mx-1{
    display: block;
    color: deepskyblue;
  }
</style>