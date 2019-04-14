<template>
  <div ref="msg">{{msg}}</div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'App',
    data() {
      return {
        msg: 'Hello, World'
      }
    },
    methods: {
      change() {
        // Vue.delete()
        this.msg = 'Hello, Vue';
        console.log(this.$refs.msg.innerText); // hello world
        this.$nextTick(() => {
          console.log(this.$refs.msg.innerText); // hello vue
        })
        this.$nextTick().then(() => {
          console.log(this.$refs.msg.innerText); // hello vue
        })
      }
    }
  }
</script>
