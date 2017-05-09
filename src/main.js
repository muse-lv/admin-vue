import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from "vue-resource"
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from '@/vuex/store.js'
import NProgress from 'nprogress' // 页面顶部进度条
import '@/assets/css/nprogress.css'
import ajax from '@/assets/js/ajax'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueResource)

Vue.prototype.$apiPrefix = ajax.prefix

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
})

router.afterEach(transition => {
  NProgress.done();
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
