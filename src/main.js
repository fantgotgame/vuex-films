import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import './assets/styles/normalize.scss';
import './assets/styles/global.scss';
import VueAxios from 'vue-axios';
import axios from 'axios';

createApp(App)
   .use(store)
   .use(router)
   .use(VueAxios, axios)
   .mount('#app')
