<template>
  <div class="mx-auto w-75 py-2">
    <b-embed
      type="iframe"
      aspect="16by9"
      allowfullscreen
      :src="baseUrl">
    </b-embed>
  </div>
</template>

<script>
export default {
  name: 'Kiwi',
  data () {
    return {
      baseUrl: process.env.VUE_APP_KIWI_URL || "https://kiwiirc.com/nextclient/"
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
