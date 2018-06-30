// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// 引入Vue轮播图库
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'swiper/dist/css/swiper.css'
// 重置浏览器默认样式
import 'styles/reset.css'
// 解决1px边框
import 'styles/border.css'
// 引入图标库
import 'styles/iconfont.css'
import store from './store'

Vue.config.productionTip = false
// 解决移动端点击事件300ms延迟的问题
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
