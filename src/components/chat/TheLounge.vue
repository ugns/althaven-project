<template>
  <div class="mx-auto w-100 py-2">
    <div>
      <b-embed
        type="iframe"
        aspect="16by9"
        allowfullscreen
        :src="baseUrl + '?nick=' + username">
      </b-embed>
    </div>
  </div>
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
</style>
