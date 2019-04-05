import Vue from 'vue'

let childComp = {
  template: '<div>{{msg}}</div>',
  created() {
    console.log('child created')
  },
  mounted() {
    console.log('child mounted')
  },
  data() {
    return {
      msg: 'Hello Vue'
    }
  }
}

Vue.mixin({
  created() {
    console.log('parent created')
  }
})

let app = new Vue({
  el: '#app',
  render: h => h(childComp)
});

/*
1,外部调用场景下的合并配置是通过mergeOption,并遵循一定的合并策略
2,组件的合并是通过initInternalComponent,它的合并更快
3,框架库的设计都是类似,自身定义了默认配置,同时可以再初始化阶段传入配置,然后merge配置,来达到定制化不同需求的目的;
*/
