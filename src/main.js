import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/tailwind.css';
import { MotionPlugin } from '@vueuse/motion';


const app = createApp(App);

// Use Vuex store if you have one
app.use(store);

// Use Vue Router if you have one
app.use(router);

// Use @vueuse/motion as a plugin
app.use(MotionPlugin);

app.mount('#app');
