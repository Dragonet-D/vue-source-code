# vuex
![vuex](https://vuex.vuejs.org/vuex.png)

## 初始化模块
```javascript
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
};

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... },
};

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
});

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```
