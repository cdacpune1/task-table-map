<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs3 pl-4>
            <v-select
              v-if="renderArray"
              :items="renderArray"
              label="RegionManager"
              @change="onRegionManagerChange"
              solo
              item-text="userId"
            >
            </v-select>
          </v-flex>
          <v-flex xs3 pl-4>
            <v-select
              v-if="renderArray"
              :items="managerArray"
              label="AreaManager"
              @change="onAreaManagerChange"
              solo
              item-text="userId"
            >
            </v-select>
          </v-flex>
          <v-flex xs3 pl-4>
            <v-select
              v-if="renderArray"
              label="FieldUser"
              :items="userArray"
              item-text="userId"
              solo
            >
            </v-select>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <div class="text-right " style="padding-top:50px"></div>

        <v-card>
          <v-data-table
            :headers="headers"
            :items="tableArray"
            v-if="tableArray.length "
            item-key="userId"
           
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
export default {
  data() {
    return {
      gpsEnabled: false,
      userActivityList: [],
      // activityArray: [],
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
      userArray: [],
      tableArray: []
    };
  },

  mounted() {
    this.$store.dispatch("load");
  },

  computed: {
    renderArray() {
      if (
        this.$store.getters.getRenderArray &&
        this.$store.getters.getRenderArray.userTerritoryData &&
        this.$store.getters.getRenderArray.userTerritoryData.userList
      ) {
        return this.$store.getters.getRenderArray.userTerritoryData.userList;
      }else{
        return null
      }
    }
//     ,
//     activityArray(){
// if(this.$store.getters.getRenderArray.userActivityList){
//   return this.$store.getters.getRenderArray.userActivityList;
// }
//     }
    // getData() {
    //   return this.$store.getters.rows;
    //   // console.log(this.$store.getters.rows);
    // }
  },
  methods: {
    onRegionManagerChange(val) {
      const manager = this.renderArray.find(obj => obj.userId == val);
      this.managerArray = manager.userList;
      // console.log(this.managerArray);
    },
    onAreaManagerChange(managerId) {
      const areaManager = this.managerArray.find(
        val => val.userId == managerId
      );

      this.userArray = areaManager.userList;
      const userAct = this.userArray.map(managerId => managerId.userId);
      console.log(userAct, "act");

      this.activityArray = this.$store.getters.getRenderArray.userActivityList;

      console.log(this.activityArray);

      this.tableArray = this.activityArray.filter(objNew => {
        if (userAct.indexOf(objNew.userId) > -1) {
          return true;
        } else {
          return false;
        }
      });
      console.log(this.tableArray, "tableArray");
    }
  }
};
</script>
<style scoped></style>
