import Vue from 'vue'
import Router from 'vue-router'
import '../assets/styles/reset.css'
import Home from '../components/home/home'
import City from '../components/city/City'
import Detail from '../components/detail/Detail'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'
import Axios from 'axios';

Vue.prototype.$ajax =Axios;
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/',
      name: 'detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
