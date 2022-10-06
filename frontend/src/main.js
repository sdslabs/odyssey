import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vue from 'vue'

createApp(App).mount('#app')
Vue.prototype.$http = axios;
