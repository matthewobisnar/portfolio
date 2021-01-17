import Vue from 'vue'
import App from './App.vue'
import store from './Store/Store.js';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
