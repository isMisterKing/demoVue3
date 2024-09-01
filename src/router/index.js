import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: '/helloWorld'
  },
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: () => import('@/components/helloWorld.vue')
  },
  {
    path: '/customIframe',
    name: 'customIfram',
    component: () => import('@/components/customIframe.vue')
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});