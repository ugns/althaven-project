<template>
  <div>
    <b-button-group>
      <b-button
        v-for="module in modules"
        :key="module"
        :class="[{ active: currentChat === module }]"
        variant="primary"
        @click="currentChat = module">{{ module }}</b-button>
    </b-button-group>
    <component :is="currentChatComponent" :username="user.nickname" class="module"/>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import TheLounge from '@/components/chat/TheLounge.vue'
// import LightIRC from '@/components/chat/LightIRC.vue'
import Kiwi from '@/components/chat/Kiwi.vue'

export default {
  data () {
    return {
      currentChat: 'TheLounge',
      modules: ['TheLounge', 'Kiwi']
    }
  },
  computed: {
    ...mapState('auth', {
        user: state => state.userInfo
    }),
    ...mapGetters('auth', {
      isAuthenticated: 'isAuthenticated',
    }),
    currentChatComponent: function () {
      return this.currentChat
    }
  },
  components: {
    TheLounge,
    // LightIRC,
    Kiwi
  }
}
</script>
