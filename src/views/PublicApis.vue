<template>
   <v-container>
      <PublicApisTable :apis="apis"></PublicApisTable>
   </v-container>
</template>

<script>
import PublicApisTable from "@/components/PublicApisTable";

   export default {
    components:{
      PublicApisTable
    },
    data() {
      return {
        publicApis: [],
      };
    },      
    computed:{
      apis(){ 
        return this.publicApis;
      },
    },
    mounted() {
      // API call
      this.fetchApis();
    },
    methods: {
      fetchApis(){
        fetch("https://api.publicapis.org/entries", {})
          .then(response => {
            return response.json();
          }).then(apis => {
            this.publicApis = apis.entries;
          });
      }
    }
   }
</script>