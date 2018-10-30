<template>
  <div class="mx-auto w-75 py-2">
    <div>
      <b-embed
        type="iframe"
        aspect="16by9"
        allowfullscreen
        :src="baseUrl">
      </b-embed>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kiwi',
  data () {
    return {
      baseUrl: process.env.VUE_APP_KIWI_URL || "https://kiwiirc.com/nextclient/"
    }
  }
}
</script>
