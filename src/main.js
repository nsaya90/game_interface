import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'animate.css';



createApp(App).use(store).use(router).mount('#app')
