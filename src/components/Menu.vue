<template>
  <b-navbar
    toggleable="md"
    type="dark">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand :to="{ name: 'home' }">AltHaven</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
        <b-nav-item
          v-if="isAuthenticated" 
          :to="{ name: 'webchat' }">Chatrooms</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          v-if="!isAuthenticated"
          :to="{ name: 'signIn'}"><fa-icon icon="sign-in-alt"/><span class="nav-username">Sign In</span></b-nav-item>
        <b-nav-item-dd
          v-if="isAuthenticated"
          right>
          <template slot="button-content">
            <fa-icon :icon="['far','user-circle']"></fa-icon><strong class="nav-username">{{ user.nickname }}</strong>
          </template>
          <b-row
            style="margin:5px">
            <b-dd-item disabled :to="{ name: 'changePassword' }"><fa-icon :icon="['far','edit']"></fa-icon><span class="nav-username">My Account</span></b-dd-item>
            <b-dd-divider></b-dd-divider>
            <b-dd-item :to="{ name: 'signOut' }"><fa-icon icon="sign-out-alt"></fa-icon><span class="nav-username">Sign Out</span></b-dd-item>
          </b-row>
        </b-nav-item-dd>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Auth from "@aws-amplify/auth"

export default {
  name: 'Navbar',
  data() {
    return {
      user: "",
    }
  },
  async created() {
    if (this.isAuthenticated) {
      const currentUser = await Auth.currentUserInfo()
      this.user = {
        username: currentUser.username,
        ...currentUser.attributes
      } 
    }
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
    ...mapState({
        isAuthenticated: state => state.auth.isAuthenticated,
    })
  },
  methods: {
    signIn() {
      this.$store.dispatch('signIn')
    }
  }
}
</script>

<style>
.navbar {
  background-image: linear-gradient(to bottom, darkblue, blue);
}

.navbar-nav .nav-link.active{
  font-weight: bold;
}

.nav-username {
  padding-left: .5em;
  padding-right: .5em;
}
</style>
