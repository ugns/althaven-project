<template>
  <b-embed
    type="iframe"
    :src="baseUrl + '?nick=' + username">
  </b-embed>
</template>

<script>
export default {
  name: 'TheLounge',
  data () {
    return {
      baseUrl: process.env.VUE_APP_THELOUNGE_URL
    }
  },
  props: {
    username: String
  },
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
