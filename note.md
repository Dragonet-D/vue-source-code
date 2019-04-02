# > 进度
    2-12
    2-14
## 响应式
- 响应式的核心是Object.defineProperty给对象的属性添加getter和setter属性;
- Vue 会把props,data等变成响应式对象,在创建过程中发现子属性也为对象,则递归把该对象变成响应式;

## 异步组件

### 清除依赖
```javascript
function cleanupDeps() {
    let i = this.deps.length;
    while(i--) {
        const dep = this.deps[i];
        if(!this.newDepsIds.has(dep.id)) {
            dep.removeSub(this)
        }
    }
    let tmp = this.depIds
    this.depIds = this.newDepIds
    this.newDepIds = tmp
    this.newDepIds.clear()
    tmp = this.deps
    this.deps = this.newDeps
    this.newDeps = tmp
    this.newDeps.length = 0
}
```
## 派发更新

- 队列排序
