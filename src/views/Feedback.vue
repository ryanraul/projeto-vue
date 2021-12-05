<template>
   <v-container>
      <v-row class="d-flex justify-center mt-1">
         <v-btn color="blue-grey darken-3" class="ma-2 white--text" @click="gradeUpdate()">               
            Grade filter: <span v-if="gradeFilter == 0">all</span>
            <span  v-for="i in gradeFilter" v-bind:key="i">
               <v-icon right dark>mdi-star</v-icon>
            </span>
         </v-btn>
      </v-row>
      <v-row>
         <v-col v-for="feedback in feedbacks" :key="feedback.id" cols="4">
            <VisitorsCard :content="feedback"></VisitorsCard>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
   import VisitorsCard from "@/components/VisitorsCard";

  export default {
      components:{
        VisitorsCard
      },
      computed:{
         feedbacks(){ 
            return this.$store.getters.getFeedbacks;
         },
         gradeFilter(){ 
            return this.$store.getters.getGradeFilter;
         }
      },
      methods:{
         gradeUpdate(){
            this.$store.commit("gradeFilterUpdate");
         }
      }
      
  }
</script>