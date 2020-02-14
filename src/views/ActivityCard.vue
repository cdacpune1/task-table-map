<template>
  <v-container fluid style="margin-top:140px">
    <v-data-iterator
      :items="renderArray"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="5"
            md="6"
            lg="4"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{
                item.name
              }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>UserName:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    item.name + item.employeeId
                  }}</v-list-item-content>
                </v-list-item>

               
                <v-list-item>
                  <v-list-item-content>StoresVisit:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    item.noOfStoresVisted
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>lastLoginTime:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    item.lastLoginTime
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>lastActivityTime:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    item.lastActivityTime
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>gpsEnabled:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    item.gpsEnabled
                  }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';

// import axios from "axios";
export default {
  data() {
    return {
      itemsPerPage: 3,
// items:[],
     
    };
  },
      
    mounted () {
         this.$store.dispatch('load')
  
  },
   computed:  mapState([   
      'renderArray'     
   ])
   
  }

</script>
