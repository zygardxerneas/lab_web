/* eslint-disable */

import Vue from 'vue'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import {Anchor, Timeline} from 'iview';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import 'lib-flexible'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Anchor);
Vue.use(Timeline);

var vueSmoothScroll = require('vue-smoothscroll');
Vue.use(vueSmoothScroll);

Vue.config.productionTip = false;

const routes = [
  { path: '/home', component: App },
  { path: '/news', component: App },
  { path: '/people', component: App },
  { path: '/projects', component: App},
  {path: '/contact', component: App}
]

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // 如果你的連結是帶 # 這種
    // to.hash 就會有值(值就是連結)
    // 例如 #3
    if (to.hash) {
      return {
        // 這個是透過 to.hash 的值來找到對應的元素
        // 照你的 html 來看是不用多加處理這樣就可以了
        // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
        selector: to.hash
      }
    }
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
