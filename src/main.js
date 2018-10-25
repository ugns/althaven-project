import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import vuelidate from 'vuelidate'

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
  faEdit,
  faComments,
  faEnvelope
} from '@fortawesome/free-regular-svg-icons'
import {
  faSignInAlt,
  faSignOutAlt,
  faUsers,
  faUserEdit,
  faUserFriends,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Auth from "@aws-amplify/auth"
import AuthConfig from '@/aws-exports'

Auth.configure(AuthConfig)

Vue.use(BootstrapVue)
Vue.use(vuelidate)

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)
Vue.component(FontAwesomeLayers.name, FontAwesomeLayers)
Vue.component(FontAwesomeLayersText.name, FontAwesomeLayersText)

Vue.config.productionTip = false

library.add(faUserCircle, faEdit, faComments, faEnvelope) // Add far icons
library.add(faSignInAlt, faSignOutAlt, faUsers, faUserEdit, faUserFriends, faSpinner) // add fas icons

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')