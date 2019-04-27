# vue-router

## matcher
- createMatcher的初始化逻辑

- match的匹配过程

## summary
- 路由初始化的时机是在组件的初始化阶段,执行到beforeCreate钩子函数的时候会执行router.init方法.然后又会执行history.transitionTo方法做路由过渡.
