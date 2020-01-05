import Vue from 'vue'
//import router from './router'
import routers from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //router,  两种方式都可以
  router: routers,
  render: h => h(App),
}).$mount('#app')
