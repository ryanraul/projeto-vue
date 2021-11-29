<template>
   <v-container>
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
            return this.$store.getters.allFeedbacks;
         },
      }
      
  }
</script>