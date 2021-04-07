/**------------------------------------------------------------------------
 * ?                                ABOUT
 * @author      : ElricGUMBAU
 * @email       : elric.gumbau@berger-levrault.com
 * @description : Initialise this root component into a element
 * @copyright   : CARL Software (https://www.carl-software.fr/)
 *------------------------------------------------------------------------* */

import Vue from 'vue'
import vSelect from 'vue-select'
import { Icon } from 'leaflet'
import { Notyf } from 'notyf'
import App from './App.vue'
import router from './router'
import store from './store'
import 'notyf/notyf.min.css'
import 'vue-select/dist/vue-select.css'
import 'leaflet/dist/leaflet.css'
import 'flatpickr/dist/flatpickr.min.css'
import 'animate.css/animate.min.css'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/i18n/fr'

delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

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
