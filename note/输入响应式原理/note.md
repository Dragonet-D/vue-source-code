## 依赖收集
收集依赖的目的是为了当这些响应式数据发生变化，触发它们的 setter 的时候，能知道应该通知哪些订阅者去做相应的逻辑处理，我们把这个过程叫派发更新，其实 Watcher 和 Dep 就是一个非常经典的观察者设计模式的实现，下一节我们来详细分析一下派发更新的过程;

## 派发更新
当数据发生变化的时候，触发 setter 逻辑，把在依赖过程中订阅的的所有观察者，也就是 watcher，都触发它们的 update 过程，这个过程又利用了队列做了进一步优化，在 nextTick 后执行所有 watcher 的 run，最后执行它们的回调函数;

每次数据更新都是不断去push tick先push先执行

```vue
<template>
  <div ref="msg">{{msg}}</div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        msg: 'Hello, World'
      }
    },
    methods: {
      change() {
        this.msg = 'Hello, Vue';
        console.log(this.$refs.msg.innerText); // hello world
        this.$nextTick(() => {
          console.log(this.$refs.msg.innerText); // hello vue
        });
        this.$nextTick().then(() => {
          console.log(this.$refs.msg.innerText); // hello vue
        })
      },
      change1() {
        this.msg = 'Hello, Vue';
        this.$nextTick(() => {
          console.log(this.$refs.msg.innerText); // hello world
        });
        console.log(this.$refs.msg.innerText); // hello world
        this.$nextTick().then(() => {
          console.log(this.$refs.msg.innerText); // hello vue
        })
      }
    }
  }
</script>
```
- nextTick 是把要执行的任务推入到一个队列中,在下一个tick同步执行;
- 数据改变后触发渲染watcher的update,但是watchers的flush是在nextTick后,所以重新渲染是异步的;
