# > 进度
    2-12
    2-14
## 响应式
- 响应式的核心是Object.defineProperty给对象的属性添加getter和setter属性;
- Vue 会把props,data等变成响应式对象,在创建过程中发现子属性也为对象,则递归把该对象变成响应式;
