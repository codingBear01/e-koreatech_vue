<template>
  <div>
    <h3>Directive Test</h3>
    msg: {{ msg }}
    <br />
    <div v-aDirective="'red'">hello</div>
    <br />
    <div v-aDirective:aaa:bbb="'blue'">world</div>
    <br />
    <div v-aDirective:aaa.bbb="'green'">world</div>
  </div>
</template>

<script>
import aDirective from './myDirective';

export default {
  name: 'testComponent',
  data() {
    return {
      msg: 'hello',
      data: 10,
    };
  },
  directives: {
    aDirective,
  },
};
</script>
