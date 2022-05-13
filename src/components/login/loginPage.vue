<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="4" lg="3" class="text-center">
        <h5 class="headline">Login</h5>
        <v-text-field label="token" v-model="token" />
        <v-btn depressed dark block color="primary" @click="login" class="mb-2"
          >Entrar</v-btn
        >
        <v-btn text @click="loginAsGuest" color="blue"
          >Entrar como visitante</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script> 

export default {
  name: "loginPage",

  data() {
    return {
      token: "AIzaSyB2E28fXylb_jmX4QtGeW_iFJGgIex1knc",
    };
  },
  methods: {
    login() {
      if (this.token) {
        this.$store.commit("setAuthToken", this.token);
        this.$store.commit("setLogged", true);
        this.$router.push("/book");
      } else {
        this.$store.commit("showErrorMessage", "Você deve informar um token");
      }
    },
    loginAsGuest() {
      this.$store.commit("setLogged", true);
      this.$router.push("/book");
    },
  },
};
</script>
<style scoped>
</style>