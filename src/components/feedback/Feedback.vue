<template>
  <div>
    <v-snackbar v-model="showMessage" :color="color" multi-line>
      {{ message }}
      <v-btn color="white" text @click="showMessage = false">Fechar</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Feedback",
  data() {
    return {
      message: "",
      showMessage: false,
      color: '',
    };
  },
  watch: {
      '$store.state.message.text': 'setMessage',
  },
  methods: {
      setMessage(){  
          this.message = this.$store.state.message.text,
          this.color = this.$store.state.message.type === 'ERROR' ? 'error' : 'success',
          this.showMessage = true
      }
  }
};
</script>
