<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs3 pl-4>
            <v-select
              v-if="managerList"
              :items="managerList"
              label="Regional Manager"
              outlined
              @change="onRegionManagerChange"
              item-text="name"
              item-value="userId"
            >
            </v-select>
          </v-flex>
          <v-flex xs3 pl-4>
            <v-select
              v-if="managerList"
              :items="areaManagerArray"
              label="Area Manager"
              outlined
              @change="onAreaManagerChange"
              item-text="name"
              item-value="userId"
            >
            </v-select>
          </v-flex>
          <v-flex xs3 pl-4>
            <v-select
              v-if="managerList"
              label="Field User"
              outlined
              :items="selectedAreaManager.userList"
              item-text="name"
            >
            </v-select>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6 pr-2>
        <div class="text-right " style="padding-top:50px"></div>

        <v-card>
          <v-data-table
            v-if="userData"
            :headers="headers"
            :items="userData"
            item-key="userId"
            class="elevation-2"
          >
            <template slot="item" slot-scope="props">
              <tr>
                <td>{{ props.item.name }}</td>
                <td align="center">{{ props.item.noOfStoresVisted }}</td>
                <td>
                  {{ props.item.lastLoginTime }}
                </td>
                <td>{{ props.item.lastActvityTime }}</td>
                <td align="center">
                  <v-icon v-if="props.item.gpsEnabled" small class="mr-2">
                    done
                  </v-icon>
                  <v-icon v-else small class="mr-2">
                    clear
                  </v-icon>
                </td>
              </tr>
            </template>

            <!-- <template v-slot:item.gpsEnabled="{ item }">
              <v-icon v-if="item.gpsEnabled" small class="mr-2"> done </v-icon>
              <v-icon v-else small class="mr-2">
                clear
              </v-icon>
            </template> -->
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
      headers: [
        { text: "User Name", value: "name" },
        {
          text: "No of Store Visited Today",
          value: "noOfStoresVisted"
        },
        {
          text: "Last Login Time",
          value: "lastLoginTime"
        },
        {
          text: "Last Activity Time",
          value: "lastActvityTime"
        },
        {
          text: "GPS Enabled",
          value: "gpsEnabled"
        }
      ],
      areaManagerArray: [],
      selectedRegionManager: "",
      selectedAreaManager: "",
      tableArray: []
    };
  },
  mounted() {
    this.$store.dispatch("setMapView", {
      tokenId: this.$store.getters.getAccessToken,
      accountId: 5,
      userId: this.$store.state.userAuthenticate.userDetails.emailId,
      userType: this.$store.state.userAuthenticate.userDetails.userType
    });
  },

  computed: {
    managerList() {
      // console.log(
      //   "this.$store.getters.getManagerList",
      //   this.$store.getters.getManagerList
      // );
      // debugger;
      if (
        this.$store.getters.getManagerList &&
        this.$store.getters.getManagerList.userTerritoryData &&
        this.$store.getters.getManagerList.userTerritoryData.userList
      ) {
        return [
          "All",
          ...this.$store.getters.getManagerList.userTerritoryData.userList
        ];

        // console.log(...this.$store.getters.getManagerList.userTerritoryData.userList);
      } else {
        return [];
      }
    },
    //     areaManagerList() {
    // if (this.selectedAreaManager && this.selectedAreaManager.userList) {
    //   console.log(this.areaManagerArray,"this.areaManagerArray")

    // }

    //     },
    allUserList() {
      if (
        this.$store.getters.getManagerList &&
        this.$store.getters.getManagerList.userActivityList
      ) {
        return this.$store.getters.getManagerList.userActivityList;
      } else {
        return [];
      }
    },
    userData() {
      if (this.allUserList) {
        // debugger;
        // const userAct = this.allUserList.map(managerId =>
        //   managerId.userId.toLowerCase()
        // );
        let list = [];

        if (this.selectedAreaManager && this.selectedAreaManager.userList) {
          list = this.selectedAreaManager.userList;
        } else if (
          this.selectedRegionManager &&
          this.selectedRegionManager.userList
        ) {
          this.selectedRegionManager.userList.forEach(element => {
            list = list.concat(...element.userList);
          });
        } else {
          list = this.allUserList;
          // console.log(list,"list")
        }
        const userAct = list.map(managerId => managerId.userId.toLowerCase());

        return this.allUserList.filter(objNew => {
          if (userAct.indexOf(objNew.userId.toLowerCase()) > -1) {
            return true;
          } else {
            return false;
          }
        });
      } else return [];
    }
  },
  methods: {
    onRegionManagerChange(val) {
      // console.log("val", val);
      this.selectedRegionManager = this.managerList.find(
        obj => obj.userId == val
      );
      this.areaManagerArray = this.selectedRegionManager.userList;
      // console.log(this.areaManagerArray,"this.areaManagerArray");
    },

    onAreaManagerChange(managerId) {
      this.selectedAreaManager = this.areaManagerArray.find(
        val => val.userId == managerId
      );
    }
  }
};
</script>
<style scoped>
.myMap {
  height: 50px;
  width: 50px;
}
</style>

<!--<template>
  <v-card class="mapClass" flat>
    <v-select></v-select>
    <v-card-title>
      <div id="myMap"></div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      userLocationList: []
    };
  },
  methods: {
    setMap() {
    //   let datasource, popup;

    //   const popupTemplate =
    //     '<div class="customInfobox"><div class="name">{name}</div>{description}</div>';
    //   let map = new atlas.Map("myMap", {
    //     center: [-97, 39],
    //     zoom: 1,
    //     language: "en-US",
    //     authOptions: {
    //       authType: "subscriptionKey",
    //       subscriptionKey: "RZ6p8jd8gpWbZzP6Kywmt7bGj2OVaZwSp83alTT2vVE"
    //     }
    //   });
    //   map.events.add("ready", () => {
    //     datasource = new atlas.source.DataSource(null, {
    //       cluster: true
    //     });
    //     map.sources.add(datasource);
    //     let dataArr = [];
    //     this.userLocationList.forEach(element => {
    //       const point = new atlas.data.Feature(
    //         new atlas.data.Point([element.longitude, element.latitude]),
    //         {
    //           name: element.locationName,
    //           description: element.regionManger
    //         }
    //       );
    //       dataArr.push(point);
    //     });
    //     datasource.add(dataArr);

    //     const symbolLayer = new atlas.layer.SymbolLayer(datasource, null, {
    //       iconOptions: {
    //         image: "pin-red"
    //       }
    //     });
    //     map.layers.add(symbolLayer);

    //     popup = new atlas.Popup({
    //       pixelOffset: [0, -18]
    //     });

    //     map.events.add("click", symbolLayer, symbolClicked);

    //     function symbolClicked(e) {
    //       if (e.shapes && e.shapes.length > 0) {
    //         let content, coordinate, properties;
    //         if (
    //           e.shapes[0] instanceof atlas.Shape &&
    //           e.shapes[0].getType() === "Point"
    //         ) {
    //           let properties = e.shapes[0].getProperties();
    //           content = popupTemplate
    //             .replace(/{name}/g, properties.name)
    //             .replace(/{description}/g, properties.description);
    //           coordinate = e.shapes[0].getCoordinates();
    //         } else if (
    //           e.shapes[0].type === "Feature" &&
    //           e.shapes[0].geometry.type === "Point"
    //         ) {
    //           if (e.shapes[0].properties.cluster) {
    //             content =
    //               '<div style="padding:10px;">Cluster of ' +
    //               e.shapes[0].properties.point_count +
    //               " symbols</div>";
    //           } else {
    //             content = popupTemplate
    //               .replace(/{name}/g, properties.name)
    //               .replace(/{description}/g, properties.description);
    //           }
    //           coordinate = e.shapes[0].geometry.coordinates;
    //         }

    //         if (content && coordinate) {
    //           popup.setOptions({
    //             content: content,
    //             position: coordinate
    //           });
    //           popup.open(map);
    //         }
    //       }
    //     }
    //   });
    }
  },
  mounted() {
    this.setMap();
  }
};
</script>

<style scoped>
#myMap {
  height: 60vh;
  width: 50vw;
}
</style>-->
