import { createApp } from 'vue';
import App from './App.vue';
import defineGlobalComp from './globalComponents';
import store from '@/store'

const app = createApp(App);

defineGlobalComp(app);

app.use(store)

app.mount('#app');
