import Vue from 'vue'
import vSelect from 'vue-select'
import { Notyf } from 'notyf'
import App from './App.vue'
import router from './router'
import store from './store'
import 'notyf/notyf.min.css'
import 'vue-select/dist/vue-select.css'
import 'flatpickr/dist/flatpickr.min.css'

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  provide: () => {
    return {
      notyf: new Notyf({
        duration: 3000,
        dismissible: true,
      }),
    }
  },
  render: h => h(App),
}).$mount('#app')
