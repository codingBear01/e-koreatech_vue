<template>
  <div>
    <h3>I am Super Component</h3>
    <subComponent
      attr1="hello"
      :attr2="10"
      :attr3="true"
      :attr4="superMethod"
    ></subComponent>
  </div>
</template>

<script>
import subComponent from './Sub.vue';

export default {
  name: 'superComponent',
  mounted() {
    const button = document.createElement('button');
    button.innerHTML = 'New Button';
    this.$el.appendChild(button);
  },
  components: {
    subComponent,
  },
  methods: {
    superMethod() {
      console.log('super method!');
    },
  },
};
</script>
