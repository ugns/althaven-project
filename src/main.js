import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faUserCircle,
  faEdit
} from '@fortawesome/free-regular-svg-icons'
import {
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Auth from "@aws-amplify/auth"
import AuthConfig from '@/aws-exports'

Auth.configure(AuthConfig)

Vue.use(BootstrapVue)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

library.add(faUserCircle, faEdit)
library.add(faSignInAlt, faSignOutAlt)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')