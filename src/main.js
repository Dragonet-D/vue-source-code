import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      message: "hello vue"
    }
  },
  router,
  store,
  render: h => h(App)
});
