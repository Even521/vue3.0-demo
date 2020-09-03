import { createApp  } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import "element3/lib/theme-chalk/index.css";
import Element3 from "element3";
const  app=createApp(App);
app.use(router);
app.use(Element3)
app.use(store);
app.mount('#app');
