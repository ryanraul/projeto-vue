<template>
   <v-card
      class="mr-5 mt-5"
      color="#1e1e2f"
      dark
      max-width="400"
   >
      <v-card-title>
         <v-icon large left>
            mdi-comment-quote
         </v-icon>
         <span class="text-h6 font-weight-bold">{{content.title}}</span>
      </v-card-title>

      <v-card-text class="text-h5 font-weight-bold">
         {{content.description}}
      </v-card-text>

      <v-card-actions>
         <v-list-item class="grow">
         <v-list-item-avatar color="grey darken-3">
            <v-img
               class="elevation-6"
               alt=""
               :src="content.avatar"
            ></v-img>
         </v-list-item-avatar>

         <v-list-item-content>
            <v-list-item-title>{{content.userName}}</v-list-item-title>
         </v-list-item-content>

         <v-row
            align="center"
            justify="end"
         >
            <v-icon class="mr-1">
               mdi-star
            </v-icon>
            <span class="subheading mr-2">{{content.grade}}</span>
         </v-row>
         </v-list-item>
      </v-card-actions>
   </v-card>

</template>


<script>
   export default {
      props: ['content']
   }
</script>