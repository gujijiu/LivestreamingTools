<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSpeechRecognition,onKeyStroke } from '@vueuse/core'

const lang = ref('zh-CN')
let sayText = ref('')
let startNum = 0
const oneLine = 41
const twoLine = 2 * oneLine
let listeningType = true
const speech = useSpeechRecognition({
  lang,//语言
  continuous: true,//是否连续
  interimResults : false,//是否返回中间结果
})

//获取用户语音,启动事件
// start()
function myStart() {
  if(speech.isSupported){
    speech.start()
    listeningType = true
  }
}

//停止获取用户语音 
// stop()
function myStop() {
  speech.stop()
  listeningType = false
  myClear()
}

//暂停获取用户语音
// pause()
function myPause() {
  myStop()
}

//清空
function myClear() {
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




// const lang = ref('zh-CN')
// function sample<T>(arr: T[], size: number) {
//   const shuffled = arr.slice(0)
//   let i = arr.length
//   let temp: T
//   let index: number
//   while (i--) {
//     index = Math.floor((i + 1) * Math.random())
//     temp = shuffled[index]
//     shuffled[index] = shuffled[i]
//     shuffled[i] = temp
//   }
//   return shuffled.slice(0, size)
// }
// const colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow', 'transparent']
// const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(' | ')} ;`
// const speech = useSpeechRecognition({
//   lang,
//   continuous: true,
// })
// const color = ref('transparent')
// if (speech.isSupported.value) {
//   // @ts-expect-error missing types
//   const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
//   const speechRecognitionList = new SpeechGrammarList()
//   speechRecognitionList.addFromString(grammar, 1)
//   speech.recognition!.grammars = speechRecognitionList
//   watch(speech.result, () => {
//     for (const i of speech.result.value.toLowerCase().split(' ').reverse()) {
//       if (colors.includes(i)) {
//         color.value = i
//         break
//       }
//     }
//   })
// }
// const sampled = ref<string[]>([])
// const start = () => {
//   color.value = 'transparent'
//   speech.result.value = ''
//   sampled.value = sample(colors, 5)
//   speech.start()
// }
// const { isListening, isSupported, stop, result } = speech
// const selectedLanguage = ref(lang.value)
// watch(lang, lang => isListening.value ? null : selectedLanguage.value = lang)
// watch(isListening, isListening => isListening ? null : selectedLanguage.value = lang.value)
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