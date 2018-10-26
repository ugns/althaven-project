<template>
  <b-alert class="text-center"
    :show="hasAuthenticationStatus && dismissCountDown"
    dismissible
    fade
    @dismissed="dismissCountDown=0"
    @dismiss-count-down="countDownChanged"
    :variant="authenticationStatus.variant">{{ authenticationStatus.message }}.</b-alert>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  },
  watch: {
    hasAuthenticationStatus: function (val, oldVal) {
      if (val && !oldVal) {
        this.dismissCountDown = this.dismissSecs
      }
    }
  },
  mounted() {
    this.$store.dispatch("auth/clearAuthenticationStatus")
  },
  computed: {
    ...mapGetters("auth", ["authenticationStatus", "hasAuthenticationStatus"])
  }
}
</script>
