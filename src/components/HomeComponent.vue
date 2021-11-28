<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4 white--text">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vue
        </h1>

        <p class="subheading font-weight-regular">
          App developed using vuetify for evaluation
        </p>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeComponent',

    data: () => ({}),
  }
</script>
