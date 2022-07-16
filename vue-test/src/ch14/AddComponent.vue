<template>
  <div>
    <input v-model="item.title" placeholder="input title" />
    <input v-model="item.content" placeholder="input content" />
    <br />
    <button
      @click="addItemAction({ title: item.title, content: item.content })"
    >
      Add
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'addComponent',
  data() {
    return {
      item: {
        title: '',
        content: '',
      },
    };
  },
  methods: {
    // vuex에 actions을 발생시키기 위해 mapper 활용
    ...mapActions('todoStore', ['addItemAction']),
  },
};
</script>
