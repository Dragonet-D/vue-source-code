import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      message: "hello vue"
    }
  },
  router,
  render: h => h(App)
});
