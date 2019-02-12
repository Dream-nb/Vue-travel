// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Festclick from 'fastclick'
import 'swiper/dist/css/swiper.css'
import 'babel-polyfill'

Vue.use(VueAwesomeSwiper);
Festclick.attach(document.body);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
