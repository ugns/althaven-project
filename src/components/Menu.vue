<template>
  <b-navbar
    toggleable="md"
    type="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand :to="{ name: 'home' }">AltHaven</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <!-- <b-nav-item :to="{ name: 'about' }">About</b-nav-item> -->
        <b-nav-item
          v-if="isAuthenticated" 
          :to="{ name: 'webchat' }">Chatrooms</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          v-if="!isAuthenticated"
          class="nav-btn"
          :to="{ name: 'signIn'}"><font-awesome-icon icon="sign-in-alt"/><span class="nav-username">Sign In</span></b-nav-item>
        <b-nav-item-dropdown
          v-if="isAuthenticated"
          right>
          <template slot="button-content">
            <font-awesome-icon :icon="['far','user-circle']"></font-awesome-icon><strong class="nav-username">{{ user.nickname }}</strong>
          </template>
          <b-row
            class="justify-content-md-center"
            style="margin:5px">
            <!-- <b-dropdown-item :to="{ name: 'changePassword' }"><font-awesome-icon :icon="['far','edit']"></font-awesome-icon><span class="nav-username">My Account</span></b-dropdown-item> -->
            <b-dropdown-item :to="{ name: 'signOut' }"><font-awesome-icon icon="sign-out-alt"></font-awesome-icon><span class="nav-username">Sign Out</span></b-dropdown-item>
          </b-row>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex'
import Auth from "@aws-amplify/auth"

export default {
  name: 'Navbar',
  data() {
    return {
      user: {},
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

<style scoped>
.navbar {
  background-image: linear-gradient(to bottom, darkblue, royalblue);
}

.navbar-nav .nav-link {
  color: royalblue;
}

.nav-username {
  padding-left: .5em;
  padding-right: .5em;
}
</style>
