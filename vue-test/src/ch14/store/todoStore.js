let count = 0;
const todoStore = {
  namespaced: true,
  state() {
    return {
      items: [],
    };
  },
  actions: {
    addItemAction({ commit }, item) {
      item.id = count++;
      commit('addItemMutation', item);
    },
  },
  mutations: {
    addItemMutation(state, item) {
      state.items.push(item);
    },
  },
};

export default todoStore;
