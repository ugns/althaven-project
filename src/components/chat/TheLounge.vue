<template>
  <div class="thelounge">
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
.thelounge {
  padding: 1.5rem;
  margin: 0;
  margin-left: 12.5%;
  margin-right: 12.5%;
  position: relative;
  border-width: .2rem;
  width: 75%
}
</style>
