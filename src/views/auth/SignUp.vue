<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="6">
        <div class="b-form-1">
          <h2>Sign Up</h2>
          <p>Sign up for an account on the site.</p>
          <b-form @submit.prevent="signUp">
            <b-input-group prepend="Username">
              <b-form-input 
                id="usernameInput"
                type="text"
                v-model="username"
                required
                autofocus
                placeholder="jdoe"/>
            </b-input-group>
            <br>
            <b-input-group prepend="Email">
              <b-form-input
                id="emailInput"
                type="email"
                autocomplete="username"
                v-model="email"
                required
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
            <b-input-group prepend="Birthday">
              <b-form-input
                id="dobInput"
                type="date"
                v-model="dob"
                required/>
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
          <b-link :to="{ name: 'passwordReset' }">Reset password</b-link>
        </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col cols="6">
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
      username: "",
      email: "",
      dob: "",
      password: ""
    };
  },
  mounted() {
    this.$store.dispatch("auth/clearAuthenticationStatus")
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async signUp() {
      await this.$store.dispatch("auth/signUp", {
        username: this.email,
        password: this.password,
        attributes: {
          email: this.email,
          birthdate: this.dob,
          nickname: this.username
        }
      })

      if (!this.hasAuthenticationStatus) {
        this.$router.push({ name: 'confirmSignUp' })
      }
    }
  }
};
</script>
