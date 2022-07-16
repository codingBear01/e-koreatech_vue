<template>
  <div>
    <h3>Router Test</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index" @click="goToLogin(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeComponent',
  data() {
    return {
      items: ['title1', 'title2', 'title3'],
    };
  },
  methods: {
    goToLogin(param) {
      // 이벤트 발생에 의해서 호출되며 Router로 화면 전환
      this.$router.push(`/detail/${param}`);
    },
  },
};
</script>
