import Vue from 'vue'
import App from './App.vue'
import '../public/css/fontface.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
