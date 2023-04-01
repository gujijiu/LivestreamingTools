<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSpeechRecognition,onKeyStroke } from '@vueuse/core'

const lang = ref('zh-CN')
let sayText = ref('')
let startNum:number = 0
const oneLine:number = 41
const twoLine:number = 2 * oneLine
let listeningType:boolean = true
const speech = useSpeechRecognition({
  lang,//语言
  continuous: true,//是否连续
  interimResults : false,//是否返回中间结果
})

//获取用户语音,启动事件
// start()
function myStart():void {
  if(speech.isSupported){
    speech.start()
    listeningType = true
  }
}

//停止获取用户语音 
// stop()
function myStop():void  {
  speech.stop()
  listeningType = false
  myClear()
}

//暂停获取用户语音
// pause()
function myPause():void  {
  myStop()
}

//清空
function myClear():void  {
  sayText.value = ''
  startNum = 0
}

//是否支持语音识别
watch(speech.isSupported, (isSupported) => {
  console.log(isSupported)
})

//是否正在获取语音 
watch(speech.isListening, (isListening) => {
  if(!isListening && listeningType){
    console.log('停止获取语音')
    myStart()
    startNum = 0
  }
  console.log(isListening)
})

//是否获取到最终结果
watch(speech.isFinal, (isFinal) => {
  console.log(isFinal)
})

//获取语音识别结果
watch(speech.result, result => {
  console.log(result.length - startNum,twoLine)
  if (result.length - startNum < 0) console.log(result.length,startNum,result)
  if(result.length - startNum > twoLine){
    startNum += oneLine
    console.log(startNum)
  }
  // console.log(result)
  //保留result的最后两行赋值给sayText
  sayText.value = result.slice(startNum)
  // console.log(startNum)
})

//设置启动快捷键 监听s键盘事件
onKeyStroke(['s','S'], (e) => {
  console.log(e,'s')
  myStart()
}, { eventName: 'keyup' })
//设置停止快捷键 监听d键盘事件
onKeyStroke(['d','D'], (e) => {
  console.log(e,'d')
  myStop()
}, { eventName: 'keyup' })
//设置暂停快捷键 监听p键盘事件
onKeyStroke(['p','P'], (e) => {
  console.log(e,'p')
  myPause()
}, { eventName: 'keyup' })


</script>

<template>
    <div class="subtitleMain">
      <el-row :gutter="12" style="padding-left: 25%;">
        <el-col :span="12">
          <el-card shadow="always"> <el-text class="mx-1" size="large">{{sayText}}</el-text> </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<style scoped>
  .subtitleMain{
    width: 100%;
    height: 100%;
    text-align: center;
  }
</style>