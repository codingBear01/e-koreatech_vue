<template>
  <div>
    <h3>Option Test</h3>
    <div>message: {{ msg }}</div>
    <span v-once>only once: {{ msg }}</span>
    <input type="text" v-model="msg" />
    <br />
    <br />

    <button :disabled="isBtnDisabled">button</button>
    <br />
    <!-- computed의 경우 2번 이상 사용되어도 데이터가 변경되지 않았기 때문에 한 번만 호출됨
    method는 데이터가 변경되지 않아도 2번 호출 가능 -->
    <p>computed message: {{ computedMethod }}</p>
    <p>method message: {{ method() }}</p>
    <p>computed message: {{ computedMethod }}</p>
    <p>method message: {{ method() }}</p>

    <div>firstName: {{ firstName }}</div>
    <div>fullName: {{ fullName }}</div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <br />

    <span v-html="htmlData"></span>
  </div>
</template>

<script>
export default {
  name: 'myComponent',
  data() {
    return {
      msg: 'hello',
      isBtnDisabled: true,
      firstName: 'Myeongmo',
      lastName: 'Kang',
      fullName: 'Kang Myeongmo',
      htmlData: "<a href='#'>hello</a>",
    };
  },
  computed: {
    computedMethod() {
      console.log('computed function call');
      return this.msg.split('').reverse().join('');
    },
  },
  methods: {
    method() {
      console.log('method function call');
      return this.msg.split('').reverse().join('');
    },
  },
  watch: {
    firstName(val) {
      this.fullName = val + ' ' + this.lastName;
    },
    lastName(val) {
      this.fullName = this.lastName + ' ' + val;
    },
  },
};
</script>
