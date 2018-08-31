import Vue from 'vue'
import App from './App.vue'
import 'vue-material/dist/vue-material.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { MdToolbar, MdButton, MdContent, MdTabs } from 'vue-material/dist/components'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdToolbar)

library.add(faCoffee, faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
