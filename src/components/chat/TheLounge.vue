<template>
  <b-embed
    type="iframe"
    :src="chatUrl">
  </b-embed>
</template>

<script>
const baseUrl = 'https://webchat.alternativehaven.com/'

export default {
  name: 'TheLounge',
  props: {
    username: String
  },
  computed: {
    chatUrl: function() {
      return baseUrl + '?nick=' + this.username
    }
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
