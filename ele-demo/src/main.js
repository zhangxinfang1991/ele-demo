import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI,Router);

new Vue({
  el: '#app',
  Router,
  render: h => h(App)
})
