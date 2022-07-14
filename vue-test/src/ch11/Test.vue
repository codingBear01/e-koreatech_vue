<template>
  <div>
    <h3>Built-In Directive Test</h3>
    <h4>v-bind test</h4>
    <div v-bind:style="{ color: activeColor, fontSize: `${fontSize}px` }">
      hello
    </div>
    <a :href="url">go to google</a>

    <h4>v-if test</h4>
    <template v-if="loginType === 'username'">
      <label>name: </label>
      <input type="text" placeholder="이름을 입력하세요" />
    </template>
    <template v-else>
      <label>email: </label>
      <input type="email" placeholder="이메일을 입력하세요" />
    </template>
    <br />
    <button @click="loginTypeChange">Change the Login Type</button>

    <h4>v-for test</h4>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ index }} - {{ item.message }}
      </li>
    </ul>
    <ul>
      <li v-for="(value, key, index) in object" :key="index">
        {{ index + 1 }} - {{ key }} - {{ value }}
      </li>
    </ul>

    <h4>event</h4>
    <form>
      <input type="submit" v-on:click="submitMethod" />
      <input type="submit" v-on:click.prevent="submitMethod" />
    </form>
    <br />

    <input type="text" @keyup.enter.space="keyEvent" />
    <br />
    <input v-model="name" placeholder="enter your name" />
    <br />
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'testComponent',
  data() {
    return {
      activeColor: 'red',
      fontSize: 30,
      url: 'https://www.google.com',
      loginType: 'username',
      items: [{ message: 'foo' }, { message: 'bar' }],
      object: {
        firstName: 'john',
        lastName: 'doe',
        age: 30,
      },
      name: '',
    };
  },
  methods: {
    loginTypeChange() {
      if (this.loginType === 'username') this.loginType = 'email';
      else this.loginType = 'username';
    },
    submitMethod() {
      console.log('submitMethod is called');
    },
    keyEvent() {
      console.log('keyEvent is called');
    },
  },
};
</script>
