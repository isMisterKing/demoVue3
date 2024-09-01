import { createApp } from 'vue';
import App from './App.vue';
import defineGlobalComp from './globalComponents';
import store from '@/store';
import router from '@/router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);

defineGlobalComp(app);

app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app');