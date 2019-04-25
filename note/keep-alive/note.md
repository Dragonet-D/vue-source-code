# keep-alive

```javascript
let A = {
  template: '<div class="a">' +
  '<p>A Comp</p>' +
  '</div>',
  name: 'A'
}

let B = {
  template: '<div class="b">' +
  '<p>B Comp</p>' +
  '</div>',
  name: 'B'
}

let vm = new Vue({
  el: '#app',
  template: '<div>' +
  '<keep-alive>' +
  '<component :is="currentComp">' +
  '</component>' +
  '</keep-alive>' +
  '<button @click="change">switch</button>' +
  '</div>',
  data: {
    currentComp: 'A'
  },
  methods: {
    change() {
      this.currentComp = this.currentComp === 'A' ? 'B' : 'A'
    }
  },
  components: {
    A,
    B
  }
})
```
组件一旦被 <keep-alive> 缓存，那么再次渲染的时候就不会执行 created、mounted 等钩子函数，但是我们很多业务场景都是希望在我们被缓存的组件再次被渲染的时候做一些事情，好在 Vue 提供了 activated 钩子函数，它的执行时机是 <keep-alive> 包裹的组件渲染的时候

## summary

- keep-alive 组件是一个内置抽象组件,它的实现通过定义render函数并且利用了插槽;
- keep-alive 组件的渲染分为首次渲染和缓存渲染,当命中缓存,则不会再执行created和mounted钩子函数,而会执行activated钩子函数.销毁时也不会执行destroyed钩子函数,而会执行deactivated钩子函数;

