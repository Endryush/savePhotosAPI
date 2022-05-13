<template>
  <v-container fluid>
    <v-row v-if="book && book.volumeInfo">
      <v-col cols="12" md="3">
        <div
          v-if="
            book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
          "
          class="text-center pt-3"
        >
          <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="" />
        </div>
      </v-col>
      <v-col cols="12" md="9">
        <h4 class="display-1">{{ book.volumeInfo.title }}</h4>
        <h5>{{ book.volumeInfo.subtitle || "Sem descrição" }}</h5>
        <!-- <p class="mt-2" v-html="book.volumeInfo.description" ></p> -->
        <!--Mais facil de receber ataques de seguranca-->
        <p class="mt-2">{{ book.volumeInfo.description }}</p>
        <div v-if="book.volumeInfo.authors && book.volumeInfo.authors.length">
          <v-subheader>Autores</v-subheader>
          <v-divider class="mb-2"></v-divider>
          <v-chip v-for="(author, i) in book.volumeInfo.authors" :key="i" pill>
            <v-avatar left color="primary white--text">
              {{ author.substring(0, 1) }}
            </v-avatar>
            {{ author }}
          </v-chip>
        </div>
        <div
          v-if="book.volumeInfo.categories && book.volumeInfo.categories.length"
        >
          <v-subheader>Categorias</v-subheader>
          <v-divider class="mb-2"></v-divider>
          <v-chip
            v-for="(categorias, i) in book.volumeInfo.categories"
            :key="i"
          >
            {{ categorias }}
          </v-chip>
        </div>
        <div>
          <v-subheader>Ações</v-subheader>
          <v-divider class="mb-2"></v-divider>
          <v-btn
            text
            @click="goToPreview"
            color="primary"
            v-if="book.volumeInfo.previewLink"
          >
            Ver Preview
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
const axios = require("axios");
export default {
  name: "bookEntryPage",
  data() {
    return {
      book: {},
    };
  },
  created() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${this.$route.params.id}`
      )
      .then((response) => {
        this.book = response.data;
      });
  },
  methods: {
    goToPreview() {
      window.open(this.book.volumeInfo.previewLink, "_blank");
    },
  },
};
</script>
