<template>
  <v-data-table dark style="background-color: #1e1e2f;"
    :headers="headers"
    :items="apis"
    :items-per-page="10"
    class="elevation-1 mx-5 my-5"
  >
   <template v-slot:item="row">
      <tr>
         <td>{{row.item.API}}</td>
         <td>{{row.item.Description}}</td>
         <td>{{row.item.Category}}</td>
         <td>{{row.item.Auth}}</td>
         <td>
            <v-btn class="mx-2" fab dark small color="#00bf9a" :href="row.item.Link" target="_blank">
               <v-icon dark>mdi-link</v-icon>
            </v-btn>
         </td>
      </tr>
   </template>
  </v-data-table>
  
</template>

<style lang="scss">  
  tbody {
     tr:hover {
        background-color: #191928 !important;
     }
  }
</style>

<script>
  export default {
    props: ['apis'],
    data () {
      return {
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'API',
          },
          { text: 'Description', value: 'Description' },
          { text: 'Category', value: 'Category' },
          { text: 'Auth', value: 'Auth' },
          { text: 'Link', value: 'link' },
        ],        
      }
    },
  }
</script>