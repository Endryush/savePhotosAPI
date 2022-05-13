<template>
  <v-app-bar app dark flat color="secondary">
    <v-toolbar-title> Projeto - Vue curso </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items v-if="$store.state.logged" > 
      <v-btn text @click="goToBookList" >Livros</v-btn>
      <v-btn text @click="goToCollection">Minha Coleção</v-btn>
      <v-btn text @click="logout" >Sair</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader",
  methods:{
    goToBookList(){
      this.$router.push('/book')
    },
    goToCollection(){
      this.$router.push('/collection')
    },
    logout(){
      this.$store.commit('setAuthToken', ''),
      this.$store.commit('setLogged', false),
      this.$router.push('/')
    }
  }
};
</script>
