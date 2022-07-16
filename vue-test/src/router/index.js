import { createRouter, createWebHistory } from 'vue-router';

import homeComponent from '../componets/Home.vue';
import loginComponent from '../componets/Login.vue';
import detailComponent from '../componets/Detail.vue';

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

export default router;
