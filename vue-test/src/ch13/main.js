import { createApp } from 'vue';
import { createStore } from 'vuex';

import testComponent from './Test.vue';

const store = createStore({
  // state는 count 값 하나 유지
  state() {
    return {
      count: 0,
    };
  },
  // actions는 state 변경
  actions: {
    // increase 함수 호출하여 state 값 변경. 최종 데이터 변경은 매개변수로 전달되는 commit 이용
    // component에서 데이터 변경을 하기 위해 함수를 호출하면 action에서 추가 업무 진행 후 commit 명령 선언.
    // commit 명령에 의해 mutations의 increase 함수를 호출하여 매개변수 값을 변경.
    increase({ commit }) {
      commit('increase');
    },
  },
  mutations: {
    increase(state) {
      state.count++;
    },
  },
});

const app = createApp(testComponent);
app.mount('#app');
app.use(store);
