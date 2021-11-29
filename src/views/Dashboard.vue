<template>
   <v-container>
      <v-card
         elevation="0"
         color="#27293d"
         max-width="474"        
      >
         <v-card-title class="white--text">Sparkline</v-card-title>
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
</template>

<script>
  export default {
    data: () => ({ 
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