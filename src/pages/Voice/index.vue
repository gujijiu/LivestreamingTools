<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSpeechRecognition } from '@vueuse/core'

let text123 = ref('');

const lang = ref('zh-CN')
const speech = useSpeechRecognition({
  lang,//语言
  continuous: true,//是否连续
  interimResults : false,//是否返回中间结果
})
// const colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow', 'transparent']
// const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(' | ')} ;`
// console.log(grammar)
// console.log(speech.isSupported.value)
if(speech.isSupported.value){
  const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
  const speechRecognitionList = new SpeechGrammarList()
  console.log(speech)
  // speechRecognitionList.addEventListener("start", () => {
  //   console.log("start");
  // });
  // console.log(speechRecognitionList)
  // speechRecognitionList.addFromString(grammar, 1)
  // console.log(speechRecognitionList)
  speech.recognition!.grammars = speechRecognitionList 
  // console.log(speech.recognition!.grammars)
  watch(speech.result, () => {
    for (const i of speech.result.value.toLowerCase().split(' ').reverse()) {
      // console.log(i)
      // if (colors.includes(i)) {
        text123.value = i
      //   break
      // }
    }
  })
}


const start = ()=>{
  speech.result.value = ''
  speech.start()
}
const pause = ()=>{

}
// const stop = ()=>{
//   speech.stop()
// }
const { isListening, isSupported, stop, result } = speech
// console.log(result)
// const selectedLanguage = ref(lang.value)
// watch(lang, lang => isListening.value ? null : selectedLanguage.value = lang)
watch(isListening, isListening => console.log('isListening', isListening))
watch(result, result => console.log('result', result))
</script>

<template>
    <el-button type="primary" @click="start">启动</el-button>
    <el-button type="warning" @click="pause">暂停</el-button>
    <el-button type="danger" @click="stop">停止</el-button>
    <p>{{text123.value}}</p>
</template>

<style scoped>

</style>