# v-model

- 子组件传递的 value 绑定到当前父组件的 message，同时监听自定义 input 事件，当子组件派发 input 事件的时候，父组件会在事件回调函数中修改 message 的值，同时 value 也会发生变化，子组件的 input 值被更新。<br>
这就是典型的 Vue 的父子组件通讯模式，父组件通过 prop 把数据传递到子组件，子组件修改了数据后把改变通过 $emit 事件的方式通知父组件，所以说组件上的 v-model 也是一种语法糖。
- v-model是 Vue 双向绑定的真正实现，但本质上就是一种语法糖，它即可以支持原生表单元素，也可以支持自定义组件。在组件的实现中，我们是可以配置子组件接收的 prop 名称，以及派发的事件名称

use v-model in the vue component
```javascript
/* @flow */

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data: any) {
  const prop = (options.model && options.model.prop) || 'value'
  const event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value
  const on = data.on || (data.on = {})
  const existing = on[event]
  const callback = data.model.callback
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing)
    }
  } else {
    on[event] = callback
  }
}
```
child component
```vue
<template>
  <div>
    <input
      type="text"
      :value="msg"
      @input="updateValue"
      placeholder="edit me"
    >
  </div>
</template>

<script>
  export default {
    name: "test1",
    model: {
      prop: "msg",
      event: "change"
    },
    props: ["msg"],
    methods: {
      updateValue(e) {
        this.$emit("change", e.target.value)
      }
    }
  }
</script>

<style scoped>

</style>
```
parent component
```vue
<template>
  <div>
    <test1 v-model="message"/>
    <p>{{message}}</p>
  </div>
</template>
<script >

</script>

```

## summary
- v-model的本质就是语法糖,但是运行时也做了一些优化
- v-model即可以支持原生表单元素,也可以支持组件.在组件的实现中,我们可以配置子组件接收的prop名称,以及派发事件的名称;