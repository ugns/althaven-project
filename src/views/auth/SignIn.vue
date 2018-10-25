<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col>
        <div class="b-form-1">
          <h2>Sign In</h2>
          <p>Please sign into your account to access the site.</p>
          <b-form @submit.prevent="signIn">
            <b-input-group prepend="Email">
              <b-form-input
                id="emailInput"
                type="email"
                autocomplete="email"
                v-model="email"
                required
                autofocus
                placeholder="jdoe@example.com"/>
            </b-input-group>
            <br>
            <b-input-group prepend="Password">
              <b-form-input
                id="passwordInput"
                type="password"
                autocomplete="current-password"
                v-model="password"
                required
                placeholder="password"/>
            </b-input-group>
            <br>
            <b-button
              type="submit"
              variant="primary">Submit</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col>
        <p>
          <b-link :to="{ name: 'signUp' }">Create an account</b-link> or 
          <b-link :to="{ name: 'passwordReset' }">Reset password</b-link>
        </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col>
        <v-alert/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import Alert from "@/components/auth/Alert.vue";

Vue.component("v-alert", Alert);

export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async signIn() {
      await this.$store.dispatch("auth/signIn", {
        username: this.email,
        password: this.password
      })

      if (!this.hasAuthenticationStatus) {
        this.$router.push({ name: 'home' })
      }
    }
  }
};
</script>
