<template>
  <homeComponent/>
  <loginComponent/>
  <detailComponent/>
</template>

<script>
import homeComponent from './Home.vue';
import loginComponent from './Login.vue';
import detailComponent from './Detail.vue';

export default {
  name: 'App',
  components: {
    homeComponent,
    loginComponent,
    detailComponent,

  }
}
</script>
