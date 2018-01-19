import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueAmesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAmesomeSwiper)

import aaa from './components/index.js'
Vue.use(aaa)
import Rest from './component/rest.js'

var router=new VueRouter(Rest)

new Vue({
  router,

  el: '#app',
  render: h => h(App)
})
