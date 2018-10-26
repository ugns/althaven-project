<template>
  <div id="app">
    <b-container
      class="main"
      fluid>
      <v-menu/>
      <router-view/>
      <v-footer/>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("v-menu", function (resolve) {
  require(['@/components/Menu.vue'], resolve)
});
Vue.component("v-footer", function (resolve) {
  require(['@/components/Footer.vue'], resolve)
});

export default {
  name: "App"
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

.main {
  margin: 0;
  padding: 0;
}

.fa-icon {
  top: 0.125em;
  position: relative;
}

.b-main-content {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-right: 0;
  margin-left: 0;
}

.b-form-1 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-right: 0;
  margin-left: 0;
  border-width: 0.2rem;
}
</style>
