<template>
  <footer class="bd-footer">
    <b-container>
      <b-row class="justify-content-md-center">
        <div class="bd-footer-copyright">&copy;&nbsp;{{ copyright }} UnderGrid Network Services</div>
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
  margin-top: 2em;
  border-top: .2rem #f7f7f7 solid !important;
}

.bd-footer-copyright {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
