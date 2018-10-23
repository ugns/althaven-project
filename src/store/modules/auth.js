import Auth from "@aws-amplify/auth"

export default {
  namespaced: true,

  state: {
    user: null,
    userId: null,
    userInfo: null,
    isAuthenticated: false,
    authenticationStatus: null,
  },

  getters: {
    authenticatedUser: state => state.user,
    isAuthenticated: state => state.isAuthenticated,
    authenticationStatus: state => {
      return state.authenticationStatus ?
        state.authenticationStatus :
        { variant: "secondary" }
    },
    hasAuthenticationStatus: state => {
      return !!state.authenticationStatus
    },
  },

  mutations: {
    setAuthenticationError(state, err) {
      state.authenticationStatus = {
        state: 'failed',
        message: err.message,
        variant: 'danger',
      }
    },

    clearAuthenticationStatus: (state) => {
      state.authenticationStatus = null
    },

    setUserAuthenticated(state, user) {
      state.user = user
      state.isAuthenticated = true
    },

    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      state.userId = userInfo.sub
    },

    clearAuthentication(state) {
      state.user = null
      state.userId = null
      state.userInfo = null
      state.isAuthenticated = false
    },
  },

  actions: {
    clearAuthenticationStatus: ({commit}) => {
      commit('clearAuthenticationStatus', null)
    },
    signIn: async ({commit}, params) => {
      commit('clearAuthenticationStatus', null)
      try {
        const user = await Auth.signIn(params.username, params.password)
        commit('setUserAuthenticated', user)
        const userAttributes = await Auth.userAttributes(user)
        const attributes = Auth.attributesToObject(userAttributes)
        commit('setUserInfo', { username: user.username, ...attributes })
      } catch (err) {
        commit('setAuthenticationError', err)
      }
    },
    signOut: async ({commit}) => {
      try {
        await Auth.signOut()
      } catch (err) {
        commit('setAuthenticationError', err)
      }
      commit('clearAuthentication', null)
    },
    signUp: async ({commit}, params) => {
      commit('clearAuthenticationStatus', null)
      try {
        await Auth.signUp(params)
        commit('clearAuthentication', null)
      } catch (err) {
        commit('setAuthenticationError', err)
      }
    },
    confirmSignUp: async ({commit}, params) => {
      commit('clearAuthenticationStatus', null, {
        root: true
      })
      try {
        await Auth.confirmSignUp(params.username, params.code)
      } catch (err) {
        commit('setAuthenticationError', err)
      }
    },
    confirmResend: async ({commit}, params) => {
      commit('clearAuthenticationStatus', null)
      try {
        await Auth.resendSignUp(params.username)
      } catch (err) {
        commit('setAuthenticationError', err)
      }
    },
    passwordReset: async ({commit}, params) => {
      commit('clearAuthenticationStatus', null)
      try {
        await Auth.forgotPassword(params.username)
      } catch (err) {
        commit('setAuthenticationError', err)
      }
    },
    confirmPasswordReset: async ({commit}, params) => {
      commit('clearAuthenticationStatus', null)
      try {
        await Auth.forgotPasswordSubmit(params.username, params.code, params.password)
      } catch (err) {
        commit('setAuthenticationError', err)
      }
    },
    passwordResetResend: async ({commit}, params) => {
      commit('clearAuthenticationStatus', null)
      try {
        await Auth.passwordResetResend(params.username)
      } catch (err) {
        commit('setAuthenticationError', err)
      }
    },
    passwordChange: async ({commit}, params) => {
      commit('clearAuthenticationStatus', null)
      try {
        const user = await Auth.currentAuthenticatedUser()
        await Auth.changePassword(user, params.currentPassword, params.newPassword)
      } catch (err) {
        commit('setAuthenticationError', err)
      }
    }
  }
}