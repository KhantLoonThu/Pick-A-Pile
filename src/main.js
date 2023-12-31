import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router from './router'
import store from './store'
import 'swiper/swiper-bundle.css';

createApp(App).use(router).use(store).mount('#app')
