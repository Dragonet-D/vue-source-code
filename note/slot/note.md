# slot 
- 普通插槽和作用域插槽的实现。它们有一个很大的差别是数据作用域，普通插槽是在父组件编译和渲染阶段生成 vnodes，所以数据的作用域是父组件实例，子组件渲染的时候直接拿到这些渲染好的 vnodes。而对于作用域插槽，父组件在编译和渲染阶段并不会直接生成 vnodes，而是在父节点 vnode 的 data 中保留一个 scopedSlots 对象，存储着不同名称的插槽以及它们对应的渲染函数，只有在编译和渲染子组件阶段才会执行这个渲染函数生成 vnodes，由于是在子组件环境执行的，所以对应的数据作用域是子组件实例。<br>简单地说，两种插槽的目的都是让子组件 slot 占位符生成的内容由父组件来决定，但数据的作用域会根据它们 vnodes 渲染时机不同而不同。

父组件
```vue
<template slot-scope="props">
  <div>{{`${props.text} ${props.message}`}}</div>
</template>
```
子组件
```vue
<template>
<div>
  <slot text="Hello" :msg="message"></slot>
</div>
</template>
<script >
export default {
  data() {
    return {
      message: "World!"
    }
  }
}
</script>
```

```javascript
let AppLayout = {
  template: '<div class="container">' +
  '<header><slot name="header"></slot></header>' +
  '<main><slot>默认内容</slot></main>' +
  '<footer><slot name="footer"></slot></footer>' +
  '</div>'
}

let vm = new Vue({
  el: '#app',
  template: '<div>' +
  '<app-layout>' +
  '<h1 slot="header">{{title}}</h1>' +
  '<p>{{msg}}</p>' +
  '<p slot="footer">{{desc}}</p>' +
  '</app-layout>' +
  '</div>',
  data() {
    return {
      title: '我是标题',
      msg: '我是内容',
      desc: '其它信息'
    }
  },
  components: {
    AppLayout
  }
})
````

## summary 

- 普通插槽: 在父组件编译和渲染阶段生成vnodes,所以数据的作用域是父组件实例,子组件渲染的时候直接拿到这些渲染好的vnodes

- 作用域插槽: 父组件在编译和渲染阶段并不会直接生成vnodes,而是在父节点vnode的data中保留一个scopedSlots对象,储存着不同名称的插槽以及他们对应的渲染函数,只有在渲染子组件阶段才会执行这个渲染函数生成vnodes;
