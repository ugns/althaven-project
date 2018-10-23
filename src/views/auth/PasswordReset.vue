<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="6">
        <div class="b-form-1">
          <h2>Reset Password</h2>
          <p>Request a password reset code via email.</p>
          <b-form @submit.prevent="passwordReset">
            <b-input-group prepend="Email">
              <b-form-input
                id="emailInput"
                type="email"
                v-model="email"
                required
                autofocus
                placeholder="jdoe@example.com"/>
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
      <b-col cols="6">
        <p>
          <b-link :to="{ name: 'signIn' }">Sign into account</b-link> or 
          <b-link :to="{ name: 'signUp' }">Create an account</b-link>
        </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col cols="4">
        <v-alert/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from "vue";
import router from "@/router";
import { mapGetters } from "vuex"
import Alert from "@/components/auth/Alert.vue";

Vue.component("v-alert", Alert);

export default {
  data() {
    return {
      email: ""
    }
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async passwordReset() {
      await this.$store.dispatch("auth/passwordReset", {
        username: this.email
      })

      if (!this.hasAuthenticationStatus) {
        router.push({ name: 'confirmPasswordReset' })
      }
    }
  }
};
</script>
