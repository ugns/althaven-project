<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col>
        <div class="b-form-1">
          <h2>Confirm Password Reset</h2>
          <p>Please check your email for the password reset code to continue.</p>
          <b-form @submit.prevent="confirmPasswordReset">
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
            <b-input-group prepend="Code">
              <b-form-input 
                id="codeInput"
                type="text"
                v-model="code"
                required
                placeholder="XXXXXX"/>
            </b-input-group>
            <br>
            <b-input-group prepend="Password">
                <b-form-input
                id="passwordInput"
                type="password"
                autocomplete="new-password"
                v-model="password"
                required
                placeholder="password"/>
            </b-input-group>
            <br>
            <b-button-group>
              <b-button 
                type="submit" 
                variant="primary">Submit</b-button>
              <b-button 
                variant="outline-secondary" 
                @click="passwordResetResend">Resend Code</b-button>
            </b-button-group>
          </b-form>
        </div>
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
import Vue from "vue"
import { mapGetters } from "vuex"
import Alert from "@/components/auth/Alert.vue"

Vue.component("v-alert", Alert)

export default {
  data() {
    return {
      email: "",
      code: "",
      password: "",
    }
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async confirmPasswordReset() {
      await this.$store.dispatch("auth/confirmPasswordReset", {
        username: this.email,
        code: this.code,
        password: this.password,
      })
      if (!this.hasAuthenticationStatus) {
        this.$router.push({ name: 'signIn' })
      }
    },
    async passwordResetResend() {
      await this.$store.dispatch("auth/passwordReset", {
        username: this.email
      })
    }
  }
}
</script>
