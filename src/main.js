import Vue from 'vue'
import App from './App.vue'
import '../public/css/fontface.css'
import { default as router} from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
