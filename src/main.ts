import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia";
import * as VueRouter from 'vue-router'
const pinia = createPinia();


const app = createApp(App);
app.use(VueRouter as any)
app.use(pinia);
app.mount("#app");