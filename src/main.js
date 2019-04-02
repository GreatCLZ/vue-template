import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import $ from 'jquery'
import config from './libs/config.js'
import httpRequest from './utils/httpRequest' // api: https://github.com/axios/axios
import VueCookie from 'vue-cookies'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.prototype.$http = httpRequest; // ajax请求方法
Vue.use(VueCookie);
Vue.use(config);
Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
