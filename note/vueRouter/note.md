# vue-router

## matcher
- createMatcher的初始化逻辑
createMatcher的初始化就是根据路由的配置描述创建映射表,包括路径,名称到路由record的映射关系;
- match的匹配过程
match会根据传入的位置和路径计算出新的位置,并匹配到对应的路由record,然后根据新的位置和record创建新的路径并返回;

## summary
- 路由初始化的时机是在组件的初始化阶段,执行到beforeCreate钩子函数的时候会执行router.init方法.然后又会执行history.transitionTo方法做路由过渡.
