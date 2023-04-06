 <script setup lang="ts">
import Header from "../components/Header.vue"
import Main from "../components/Main.vue"
import Footer from "../components/Footer.vue"
import Subtitle from "../pages/Subtitle/index.vue"
import { ref,reactive,toRef,getCurrentInstance,watch } from 'vue'
import {useStore} from '../store'

const ToolPlateList = useStore()

 </script>
 
 <template>
    <div class="common-layout">
        <el-container>
            <el-header><Header /></el-header>
            <el-main>
                <Main></Main>
                <keep-alive>
                <component v-if="ToolPlateList.indexComponentDisplay" :is="ToolPlateList.indexComponent"></component>
                </keep-alive>
            </el-main>
            <el-footer><Footer /></el-footer>
        </el-container>
    </div>
 </template>
 
<style scoped>
 
 </style>