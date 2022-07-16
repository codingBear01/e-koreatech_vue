<template>
  <div>
    <h3>Vuex Test</h3>
    {{ count }}
    <br />
    <button @click="increase()">increase</button>
    <br />
    <hr />
    <listComponent />
    <hr />
    <addComponent />
  </div>
</template>

<script>
// vuex
import { mapActions } from 'vuex';
import { mapState } from 'vuex';
// components
import listComponent from './ListComponent.vue';
import addComponent from './AddComponent.vue';

export default {
  name: 'homeComponent',
  date() {
    return {};
  },
  methods: {
    ...mapActions('countStore', ['increase']),
  },
  computed: {
    ...mapState('countStore', ['count']),
  },
  components: {
    listComponent,
    addComponent,
  },
};
</script>
