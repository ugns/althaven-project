<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to the {{ sitename }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      sitename: process.env.VUE_APP_SITE_NAME
    }
  },
}
</script>

<style scoped>
div.home {
  text-align: center;
}
</style>
