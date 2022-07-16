import { createApp } from 'vue';
import { createStore } from 'vuex';

import homeComponent from './Home.vue';
import countStore from './store/countStore';
import todoStore from './store/todoStore';

const store = createStore({
  modules: {
    countStore: countStore,
    todoStore: todoStore,
  },
});

const app = createApp(homeComponent);
app.mount('#app');
app.use(store);
