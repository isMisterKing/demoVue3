import { createApp } from 'vue';
import App from './App.vue';
import defineGlobalComp from './globalComponents';
import store from '@/store';
import router from '@/router';

const app = createApp(App);

defineGlobalComp(app);

app
  .use(store)
  .use(router)
  .mount('#app');