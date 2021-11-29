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
          :to="item.path"
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
      <v-btn
          text
          v-for="item in items"
          :key="item.title"
          :to="item.path">
          <v-icon left >{{ item.icon }}</v-icon>
          {{ item.title }}
      </v-btn>
    </v-app-bar>

    <v-main style="background-color: #232336;">
      <router-view></router-view>
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
          { title: 'Home', icon: 'mdi-home', path:'/' },
          { title: 'Dashboard', icon: 'mdi-view-dashboard', path:'/dashboard' },
          { title: 'Feedback', icon: 'mdi-comment-account', path:'/feedback' },
          { title: 'About', icon: 'mdi-information', path:'/about' },
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