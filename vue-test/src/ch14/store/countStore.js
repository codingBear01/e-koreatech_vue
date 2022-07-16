// 애플리케이션 전역에서 유지되어야 하는 데이터 중 count값과 관련된 데이터를 관리
const countStore = {
  namespaced: true, // countStore에 의해 관리되는 데이터를 이름 값으로 구분하기 위해 설정
  state() {
    return {
      count: 0, // 관리되어야 하는 데이터를 state에 등록
    };
  },
  actions: {
    // 호출될 함수를 actions에 등록, action 함수가 호출됐을 때 자체적인 업무 로직을 함수에 넣음
    increase({ commit }) {
      commit('increase'); // 최종 데이터 변경을 위해 commit 함수 호출, mutation의 increase 함수 호출
    },
  },
  mutations: {
    increase(state) {
      state.count++;
    },
  },
  getters: {
    // store의 state 데이터를 component에서 이용, getter 없어도 되지만 있으면 편함.
    countGetter: (state) => {
      return state.count;
    },
  },
};
export default countStore;
