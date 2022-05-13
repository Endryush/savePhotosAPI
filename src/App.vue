<template>
  <v-app>
    <app-header />

    <v-content>
      <router-view />
    </v-content>
    
    <feedback />
  </v-app>
</template>
<script>
  import Feedback from './components/feedback/Feedback.vue';
  import AppHeader from './components/header/AppHeader.vue'

  export default {
    name: "App",
    components: {
      Feedback,
      AppHeader,

    }
  };
</script>
