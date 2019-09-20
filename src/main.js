import Vue from 'vue'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import 'lib-flexible'

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false;

const routes = [
  { path: '/home', component: App },
  { path: '/news', component: App }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
