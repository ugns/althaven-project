import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Alternative Haven',
      auth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import( /* webpackChunkName: "auth" */ '@/views/auth/SignIn.vue'),
    meta: {
      title: 'Sign In',
      auth: false
    }
  },
  {
    path: '/signOut',
    name: 'signOut',
    component: () => import( /* webpackChunkName: "auth" */ '@/views/auth/SignOut.vue'),
    meta: {
      title: 'Sign Out',
      auth: true
    }
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import( /* webpackChunkName: "auth" */ '@/views/auth/SignUp.vue'),
    meta: {
      title: 'Create Account',
      auth: false
    }
  },
  {
    path: '/confirmSignUp',
    name: 'confirmSignUp',
    component: () => import( /* webpackChunkName: "auth" */ '@/views/auth/ConfirmSignUp.vue'),
    meta: {
      title: 'Confirm Account',
      auth: false
    }
  },
  {
    path: '/changePassword',
    name: 'changePassword',
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      title: 'Change Password',
      auth: true
    }
  },
  {
    path: '/passwordReset',
    name: 'passwordReset',
    component: () => import( /* webpackChunkName: "auth" */ '@/views/auth/PasswordReset.vue'),
    meta: {
      title: 'Password Reset',
      auth: false
    }
  },
  {
    path: '/confirmPasswordReset',
    name: 'confirmPasswordReset',
    component: () => import( /* webpackChunkName: "auth" */ '@/views/auth/ConfirmPasswordReset.vue'),
    meta: {
      title: 'Confirm Password Reset',
      auth: false
    }
  },
  {
    path: '/chat',
    name: 'webchat',
    component: () => import( /* webpackChunkName: "chat" */ '@/views/Webchat.vue'),
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