import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      message: "hello vue"
    }
  },
  router,
  render(h) {
    return h('div', {
      attrs: {
        id: "#app"
      }
    }, this.message)
  }
});
