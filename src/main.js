import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './common/scss/icon.scss'
import './common/scss/reset.scss'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
