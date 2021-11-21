<template>
  <v-app>
    <v-navigation-drawer app dark v-model="drawer" color="#1e1e2f">
      <v-flex class="d-flex justify-center mt-2">
        <v-img 
          max-width="100"
          :src="require('./assets/logo.png')">
        </v-img>
      </v-flex>
      
      <v-list>        
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark style="background-color: #1e1e2f;">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title >Vuetify — AF</v-toolbar-title>
    </v-app-bar>

    <v-main style="background-color: #232336;">
      <v-container>
        <h1 class="grey--text">Dashboard content</h1>
        <v-card
          elevation="0"
          color="#27293d"
          max-width="474"        
        >
          <v-card-title class="grey--text">Sparkline</v-card-title>
          <v-sparkline
            color="#42b883"
            :value="dashboard.value"
            :smooth="dashboard.radius || false"
            :padding="dashboard.padding"
            :line-width="dashboard.width"
            :fill="dashboard.fill"
            auto-draw
          ></v-sparkline>
        </v-card>
      </v-container>
    </v-main>

    <v-footer dark padless>
      <v-col
        class="text-center"
        style="background-color: #1e1e2f;"
        cols="12"
      >
        <strong>{{ new Date().getFullYear() }} — Raul Ryan Deaque Silva — 190953</strong>
      </v-col>
    </v-footer>
  </v-app>

</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Account', icon: 'mdi-account-box' },
      ],
      dashboard: {
        width: 2,
        radius: 10,
        padding: 8,
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        fill: false,
      }
    }),
  }
</script>