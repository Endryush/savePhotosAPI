<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="textSearch"
          label="Pesquise algo..."
          @input="doSearch"
        />
      </v-col>
    </v-row>
    <v-row justify="center" v-if="!textSearch">
      <v-col cols="12" md="5" class="text-center">
        <p class="overline">Digite algo para iniciar a pesquisa</p>
      </v-col>
    </v-row>
    <loading :condition="searchOnGoing">
      <v-row>
        <v-col cols="12" md="3" lg="3" v-for="(book, i) in bookList" :key="i">
          <book-item :book="book" />
        </v-col>
      </v-row>
    </loading>
  </div>
</template>

<script>
import loading from "../loading/loading.vue";
import bookItem from "./bookItem.vue";

const axios = require("axios");

export default {
  name: "bookList",
  data() {
    return {
      textSearch: "",
      bookList: [],
      searchOnGoing: false,
    };
  },
  components: {
    loading,
    bookItem,
  },
  methods: {
    doSearch() {
      if (this.textSearch) {
        this.searchOnGoing = true;
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=${this.textSearch}`
          )
          .then((response) => {
            this.bookList = response.data.items;
            this.searchOnGoing = false;
          });
      } else {
        this.bookList = [];
      }
    },
  },
};
</script>
