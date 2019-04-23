<template>
  <div class="hello">
    <h1>{{ msg.msg }}</h1>
    <h2>{{name}}</h2>
    <h2>{{fullName}}</h2>
    <button @click="changeMessage">changeMessage</button>
    <button @click="changeName">changeName</button>
    <test1 v-model="message">
      slot test1
      <p slot="nameSlot">hello world!!!</p>
      <template slot-scope="props">
        <div>{{`${props.text} ${props.message}`}}</div>
      </template>
    </test1>
    <p>{{message}}</p>
  </div>
</template>

<script>
  import test1 from "./test/test1";

  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: {msg: "this is vue"},
        message: 1,
        message1: 2,
        firstName: "John",
        lastName: "Snow"
      };
    },
    methods: {
      handleMsg() {
        this.msg.msg = 'vue'
      },
      changeMessage() {
        this.message = 2
      },
      changeName() {
        this.firstName = "AAA"
      }
    },
    computed: {
      name() {
        return this.message + this.message1
      },
      fullName: {
        get() {
          return `${this.firstName} ${this.lastName}`
        },
        set(newValue) {
          const names = newValue.split(' ');
          this.firstName = names[0];
          this.lastName = names[names.length - 1];
          console.log(newValue);
        }
      }
    },
    watch: {
      message1(newVal) {
        console.log(newVal);
      },
      message: {
        immediate: true,
        handler(newVal) {
          console.log(newVal);
        }
      },
      msg: {
        deep: true,
        sync: true,
        handler(newVal) {
          console.log(newVal);
        }
      }
    },
    components: {
      test1
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
