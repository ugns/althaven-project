import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const Home = resolve => require(['@/views/Home.vue'], resolve)
const About = resolve => require(['@/views/Home.vue'], resolve)
const Webchat = resolve => require(['@/views/Webchat.vue'], resolve)
const SignIn = resolve => require(['@/views/auth/SignIn.vue'], resolve)
const SignOut = resolve => require(['@/views/auth/SignOut.vue'], resolve)
const SignUp = resolve => require(['@/views/auth/SignUp.vue'], resolve)
const ConfirmSignUp = resolve => require(['@/views/auth/ConfirmSignUp.vue'], resolve)
const PasswordReset = resolve => require(['@/views/auth/PasswordReset.vue'], resolve)
const ConfirmPasswordReset = resolve => require(['@/views/auth/ConfirmPasswordReset.vue'], resolve)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: process.env.VUE_APP_SITE_NAME,
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignIn,
    meta: {
      title: 'Sign In',
    }
  },
  {
    path: '/signOut',
    name: 'signOut',
    component: SignOut,
    meta: {
      title: 'Sign Out',
      auth: true
    }
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp,
    meta: {
      title: 'Create Account',
    }
  },
  {
    path: '/confirmSignUp',
    name: 'confirmSignUp',
    component: ConfirmSignUp,
    meta: {
      title: 'Confirm Account',
    }
  },
  {
    path: '/changePassword',
    name: 'changePassword',
    component: About,
    meta: {
      title: 'Change Password',
      auth: true
    }
  },
  {
    path: '/passwordReset',
    name: 'passwordReset',
    component: PasswordReset,
    meta: {
      title: 'Password Reset',
    }
  },
  {
    path: '/confirmPasswordReset',
    name: 'confirmPasswordReset',
    component: ConfirmPasswordReset,
    meta: {
      title: 'Confirm Password Reset',
    }
  },
  {
    path: '/chat',
    name: 'webchat',
    component: Webchat,
    meta: {
      title: 'Chatrooms',
      auth: true
    }
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }

  if (to.meta && to.meta.auth !== undefined) {
    if (to.meta.auth) {
      if (store.getters['auth/isAuthenticated']) {
        next()
        return
      }
      router.push({
        name: 'signIn'
      })
    }
    next()
    return
  }
  next()
  return
})

export default router