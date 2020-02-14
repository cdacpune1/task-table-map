<template>
  <v-container style="padding:200px 60px 0px 50px" ;>
    <!-- <v-flex md3>
 
   <v-select :items="renderArray" item-text="name"
    v-model="filters[renderArray.value]">
                
              </v-select>
</v-flex> -->

    <v-layout row wrap>
      <v-flex sm2>
        <v-select
          v-bind:items="renderArray"
          label="Select"
          item-text="name"
          v-model="selected"
        ></v-select>
      </v-flex>
    </v-layout>

    <v-flex xs12 sm12 md12>
      <v-data-table
        v-bind:headers="headers"
        :items="renderArray"
        item-key="name"
        class="elevation-4"
      >

      <td v-for= "(obj,index) in renderArray" :key="index">
        <template v-if="obj.gpsEnabled === true">
          
            <v-icon>
              {{ gpsEnabled ? "alarm" : "mdi-checkbox-blank-outline"}}
            </v-icon> 
        </template>
      </td>
    
            <!-- <template slot="renderArray" slot-scope="props"> -->
          <!-- <td>{{ props.item.name }}lolololo</td>
          <td>{{ props.item.noOfStoresVisted }}</td>
          <td>{{ props.item.lastLoginTime }}</td>
          <td>{{ props.item.lastActivityTime }}</td>
          <td v-if="flag">
            <v-icon>
              {{ gpsEnabled ? "alarm" : "mdi-checkbox-blank-outline" }}
            </v-icon> -->
          <!-- </td> -->
        <!-- </template> -->
      </v-data-table>
    </v-flex>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      // singleSelect: false,
      selected: [],
      flag: false,
      
      filters: {
        name: []
      },
      headers: [
        { text: "Name", value: "name" },
        {
          text: "NoofStoreVisited",
          value: "noOfStoresVisted",
         
        },
        {
          text: "LastLoginTime",
          value: "lastLoginTime",
         
        },
        {
          text: "LastActivity",
          value: "lastActivityTime",
         
        },
        {
          text: "gpsenabled",
          value: "gpsEnabled",
         
        }
      ]
    };
  },

  mounted() {
    this.$store.dispatch("load");
  },
  computed: mapState(["renderArray"]),
  methods: {
    //       filters:function(){
    //     return this.renderArray.filter((renderArray)=>{
    // return renderArray.name.match(this.headers);
    //       });
    //  }
  }
};
</script>
<style scoped></style>
