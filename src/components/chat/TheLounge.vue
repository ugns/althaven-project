<template>
  <div class="mx-auto w-75 py-2">
    <b-embed
      type="iframe"
      aspect="16by9"
      allowfullscreen
      :src="baseUrl + '?nick=' + username">
    </b-embed>
  </div>
</template>

<script>
export default {
  name: 'TheLounge',
  data () {
    return {
      baseUrl: process.env.VUE_APP_THELOUNGE_URL || "https://demo.thelounge.chat"
    }
  },
  props: {
    username: {
      type: String,
      required: true
    }
  },
}
</script>
