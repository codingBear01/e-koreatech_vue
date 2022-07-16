<template>
  <div>
    <h3>vuex test</h3>
    {{ count }}
    <br />
    <button @click="increase()">increase count</button>
  </div>
</template>

<script>
export default {
  name: 'testComponent',
  data() {
    return {};
  },
  methods: {
    // 함수가 호출됐을 때 vuex단에 actions을 발생.
    increase() {
      // vuex에서 활용되는 component의 내장 객체
      this.$store.dispatch('increase');
    },
  },
  computed: {
    count() {
      // vuex단의 데이터 받아오기
      return this.$store.state.count;
    },
  },
};
</script>
