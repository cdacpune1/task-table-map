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
              @change="onManagerChange"
              solo
              item-text="role"
            >
            </v-select>
          </v-flex>
          <v-flex xs3 pl-4>
            <v-select
              v-if="renderArray"
              :items="managerArray"
              label="AreaManager"
              @change="onAreaChange"
              solo
              item-text="role"
            >
            </v-select>
          </v-flex>
          <v-flex xs3 pl-4>
            <v-select
              v-if="renderArray"
              label="FieldUser"
              :items="userArray"
              item-text="role"
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
            :items="renderArray"
            v-if="renderArray"
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
// import { mapState } from "vuex";

export default {
  data() {
    return {
      gpsEnabled: false,
      userActivityList: [],
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

  computed: {
    renderArray() {
      if (this.$store.getters.getRenderArray && this.$store.getters.getRenderArray.userTerritoryData && this.$store.getters.getRenderArray.userTerritoryData.userList) {
        return this.$store.getters.getRenderArray.userTerritoryData.userList;

      } else {
        return null;
      }
    }
   
  },
  methods: {
    onManagerChange(val) {
      console.log(this.managerArray);
      this.managerArray = this.renderArray
        .filter(item => {
          if (item.role == val) {
            // console.log(item);

            return item.userList;
          }
        })
        .map(item => item.userList)[0];
      // console.log(this.managerArray);
    },
    onAreaChange(val1) {
      // console.log(typeof(val1));
      this.userArray = this.managerArray
        .filter(item1 => {
          if (item1.role == val1) {
            // console.log(item1);
            return item1.userList;
          }
        })
        .map(item1 => item1.userList)[0];

      // console.log(this.userArray);
    }

    
  }
};
</script>
<style scoped></style>

<!--<template>
  <div class="about">
    <h1 class="subheading grey--text">This is an about page</h1>
    
<div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
<!-- <v-btn class="hidden-xs-and-down">clickme</v-btn> -->
<!-- <v-btn class="hidden-xs-and-up">click_1</v-btn> -->

<!-- <v-btn class="hidden-sm-only">click_1</v-btn> -->
<!-- <v-container class="my-5 ">
  <v-layout row wrap >
    <v-flex  xs12 md6 >
<v-btn block outlined  class="primary my-5">1</v-btn>
    </v-flex>
     <v-flex xs4 md2 >
<v-btn  block outlined class="primary my-5">2</v-btn>
    </v-flex>
     <v-flex xs4 md2 >
<v-btn  block outlined class="primary my-5">2</v-btn>
    </v-flex>
     <v-flex xs4 md2 >
<v-btn  block outlined class="primary my-5">2</v-btn>
    </v-flex>
  </v-layout>
  <v-layout row wrap justify-space-between>
    <v-flex xs4 md3>
<v-btn outlined block class="success">1</v-btn>
    </v-flex>
     <v-flex xs4 md3>
<v-btn outlined block class="success">2</v-btn>
    </v-flex>
  </v-layout>


</v-container> -->
<!-- 
  </div>
</template>
<script>
  export default {
    data () {
      return {
        page: 1,
      }
    },
  }
</script>

 -->
