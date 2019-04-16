<template>
  <div class="hello">
    <h1>{{ msg.msg }}</h1>
    <h2>{{name}}</h2>
    <button @click="changeMessage">test</button>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: {msg: "this is vue"},
        message: 1,
        message1: 2
      };
    },
    methods: {
      handleMsg() {
        this.msg.msg = 'vue'
      },
      changeMessage() {
        this.message = 2
      }
    },
    computed: {
      name() {
        return this.message + this.message1
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
