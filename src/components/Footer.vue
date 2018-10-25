<template>
  <footer class="mt-3 bd-footer">
    <b-container>
      <b-row>
        <div class="mx-auto mw-100 py-3">&copy;&nbsp;{{ copyright }} UnderGrid Network Services</div>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  computed: {
    copyright: function() {
      const initialYear = '2018'
      const currentYear = new Date().getFullYear()
      return (currentYear > initialYear) ? initialYear + '-' + currentYear : currentYear
    }
  }
}
</script>

<style>
.bd-footer {
  border-top: .2rem #f7f7f7 solid !important;
}
</style>
