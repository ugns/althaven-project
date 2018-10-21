import Vue from 'vue'
import Vuex from 'vuex'
import createPersist from 'vuex-localstorage'

Vue.use(Vuex)

import auth from './modules/auth'

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    auth,
  },
  strict: debug,
  plugins: [
    createPersist({
      namespace: 'althaven-project',
      initialState: {},
      expires: 30 * 24 * 60 * 60 * 1e3
    })
  ]
})

export default store