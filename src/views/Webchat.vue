<template>
  <TheLounge
    v-if="isAuthenticated"
    :username="user.nickname">
  </TheLounge>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import TheLounge from '@/components/chat/TheLounge.vue'

export default {
  computed: {
    ...mapState('auth', {
        user: state => state.userInfo
    }),
    ...mapGetters('auth', {
      isAuthenticated: 'isAuthenticated',
    })
  },
  components: {
    TheLounge
  }
}
</script>
