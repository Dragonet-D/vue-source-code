# vuex
![vuex](https://vuex.vuejs.org/vuex.png)

## 初始化模块
```javascript
import Vuex from 'vuex'

const moduleA = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
};

const moduleB = {
  state: {},
  mutations: {},
  actions: {},
  getters: {},
};

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
});

console.log(store.state.a); // -> moduleA 的状态
console.log(store.state.b); // -> moduleB 的状态
```
