<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>About the {{ sitename }}</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      sitename: process.env.VUE_APP_SITE_NAME
    }
  },
}
</script>

<style scoped>
div.about {
  text-align: center;
}
</style>
