<template>
  <b-embed
    v-if="isAuthenticated"
    type="iframe"
    :src="src">
  </b-embed>
</template>

<script>
import { mapGetters } from 'vuex';
import Auth from "@aws-amplify/auth"

const baseUrl = 'https://webchat.alternativehaven.com/'

export default {
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
    src: function() {
      return this.isAuthenticated ? baseUrl+'?nick='+this.user.nickname : baseUrl
    },
    ...mapGetters("auth", ["isAuthenticated", "authenticatedUser"])
  }
}
</script>

<style scoped>
.embed-responsive {
  height: 600px;
}
.embed-responsive-item {
  height: 600px;
}
</style>
