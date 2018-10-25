<template>
  <b-row class="justify-content-md-center">
    <b-col>
      <h2>Sign Out...</h2>
    </b-col>
  </b-row>
</template>


<script>
export default {
  async created() {
    await this.$store.dispatch("auth/signOut")
    this.$router.push({ name: 'home' })
  }
}
</script>
