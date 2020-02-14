<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6 pl-5>
        <v-layout row wrap>
          <v-flex xs3>
            <v-select
              :items="renderArray.userTerritoryData.userList"
              label="RegionManager"
              @change="onManagerChange"
              solo
              item-text="role"
            >
            </v-select>
          </v-flex>
          <v-flex xs3 pl-4>
            <v-select
              :items="managerArray"
              label="AreaManager"
             
              solo
              item-text="role"
            >
            </v-select>
          </v-flex>
          <v-flex xs3 pl-4>
            <v-select label="FieldUser" :items="userArray" solo> </v-select>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <div class="text-right " style="padding-top:50px"></div>

        <v-card>
          <v-data-table
            :headers="headers"
            :items="renderArray.userActivityList"
          >
            <template v-slot:item.gpsEnabled>
              <v-icon v-if="(gpsEnabled = !gpsEnabled)" small class="mr-2">
                done
              </v-icon>
              <v-icon v-else small class="mr-2">
                clear
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      selected: [],
      flag: false,

      filters: {
        name: []
      },
      headers: [
        { text: "UserId", value: "userId" },
        {
          text: "NoofStoreVisited",
          value: "noOfStoresVisted"
        },
        {
          text: "LastLoginTime",
          value: "lastLoginTime"
        },
        {
          text: "LastActivityTime",
          value: "lastActvityTime"
        },
        {
          text: "gpsenabled",
          value: "gpsEnabled"
        }
      ],
      managerArray: [],
      userArray: []
    };
  },

  mounted() {
    this.$store.dispatch("load");
  },
  computed: mapState(["renderArray"]),
  methods: {
    onManagerChange(val) {
      console.log(val);
      this.managerArray = this.renderArray.userTerritoryData.userList.filter(
        item => {
          if(item.role == val) {
            return item.userList;
          }
        }
      ).map(item => item.userList)[0];
      console.log(this.managerArray);
    }
    //       filters:function(){
    //     return this.renderArray.filter((renderArray)=>{
    // return renderArray.name.match(this.headers);
    //       });
    //  }
  }
};
</script>
<style scoped>
.test {
  width: 800px;
}
</style>