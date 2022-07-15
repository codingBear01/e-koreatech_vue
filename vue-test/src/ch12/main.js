import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
// components
import homeComponent from './Home.vue';
import loginComponent from './Login.vue';
import detailComponent from './Detail.vue';

const routes = [
  // 특정 정보가 들어왔을 때 어떤 컴포넌트를 보여줄 것인지 정의
  { path: '/', name: 'home', component: homeComponent },
  { path: '/login', name: 'login', component: loginComponent },
  { path: '/detail/:title', name: 'detail', component: detailComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp({});
app.mount('#app');
app.use(router);
