import { createApp } from 'vue';
import App from './App.vue';
import defineGlobalComp from './globalComponents';

const app = createApp(App);

defineGlobalComp(app);

app.mount('#app');
