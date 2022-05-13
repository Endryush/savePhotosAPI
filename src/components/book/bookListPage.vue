<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" lg="3">
        <h3>Livros</h3>
      </v-col>
    </v-row>
    <book-list />
  </v-container>
</template>

<script>
//AIzaSyB2E28fXylb_jmX4QtGeW_iFJGgIex1knc

import bookList from './bookList.vue'

export default {
  name: "bookListPage",
  components:{
    bookList,
  }
  
};
</script>
<style scoped>
</style>
