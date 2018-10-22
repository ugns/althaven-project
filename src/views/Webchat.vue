<template>
  <TheLounge
    v-if="isAuthenticated"
    :username="user.nickname">
  </TheLounge>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Auth from "@aws-amplify/auth"
import TheLounge from '@/components/chat/TheLounge.vue'

export default {
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
    ...mapGetters("auth", ["isAuthenticated", "authenticatedUser"]),
    ...mapState({
        isAuthenticated: state => state.auth.isAuthenticated,
    })
  },
  components: {
    TheLounge
  }
}
</script>
