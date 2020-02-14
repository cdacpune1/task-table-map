<template>
  <div align="center">
    <v-card class="task1" color="#EEEEEE" shaped>
      <v-form class="px-4">
      <v-container class="mx-5 border ">
        <v-layout row>
          <v-flex class="test" xs4   row wrap>
            <v-flex xs5  class="pt-4">
              <v-card-text style="font-size:1em" class="field"
                >Name</v-card-text
              >
            </v-flex>
            <v-flex xs7>
              <v-text-field></v-text-field>
            </v-flex>
          </v-flex>
          <v-flex class="test" xs4  row wrap>
            <v-flex xs5 class="pt-4">
              <v-card-text style="font-size:1em" class="field"
                >Short Name</v-card-text
              >
            </v-flex>
            <v-flex xs7>
              <v-text-field></v-text-field>
            </v-flex>
          </v-flex>

          <v-flex class="t2" xs4 row wrap>
            <v-flex xs5 class="pt-4">
              <v-card-text style="font-size:1em"  class="d1">Id</v-card-text>
            </v-flex>
            <v-flex xs7>
              <v-text-field></v-text-field>
            </v-flex>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex class="test" xs4 row wrap>
            <v-flex xs5 class="pt-4">
              <v-card-text style="font-size:1em" class="field"
                >Parent Company Id</v-card-text
              >
              <!-- <div class="float-left"><v-card-text></v-card-text></div> -->
            </v-flex>
            <v-flex xs7>
              <v-text-field></v-text-field>
            </v-flex>
          </v-flex>
          <v-flex class="test" xs4 row wrap>
            <v-flex xs5 class="pt-4">
              <v-card-text style="font-size:1em" class="field"
                >Parent Company</v-card-text
              >
            </v-flex>
            <v-flex xs7>
              <v-text-field></v-text-field>
            </v-flex>
          </v-flex>

          <v-flex class="t2" xs4 row wrap>
            <v-flex xs5 class="pt-4">
              <v-card-text style="font-size:1em" class="d1"
                >Type</v-card-text
              >
            </v-flex>
            <v-flex xs7>
              <v-text-field></v-text-field>
            </v-flex>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex class="test" xs4 row wrap>
            <v-flex xs4 class="pt-4">
              <v-card-text style="font-size:1em" class="field"
                >Create On
              </v-card-text>
            </v-flex>
            <v-flex xs8>
              <v-menu>
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :value="due1"
                    v-on="on"
                    prepend-icon="date_range"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="due1"></v-date-picker>
              </v-menu>
            </v-flex>
          </v-flex>

          <v-flex class="test" xs4 row wrap>
            <v-flex xs5 class="pt-4">
              <v-card-text style="font-size:1em" class="field"
                >Create By
              </v-card-text>
            </v-flex>

            <v-flex xs7>
              <v-select :items="os"></v-select>
            </v-flex>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex class="test" xs4 row wrap>
            <v-flex xs4 class="pt-4">
              <v-card-text style="font-size:1em" class="field"
                >Update On</v-card-text
              >
            </v-flex>
            <v-flex xs8>
              <v-menu>
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :value="due"
                    v-on="on"
                    prepend-icon="date_range"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="due"></v-date-picker>
              </v-menu>
            </v-flex>
          </v-flex>

          <v-flex class="test" xs4 row wrap>
            <v-flex xs5 class="pt-4">
              <v-card-text style="font-size:1em" class="field">
                Updated By
              </v-card-text>
            </v-flex>
            <v-flex xs 7>
              <v-select :items="os"></v-select>
            </v-flex>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex class="test pt-4" xs4 row wrap>
            <v-flex xs6>
              <div class="float-right">
                <v-card-text style="font-size:1em">Active</v-card-text>
              </div>
            </v-flex>
            <v-flex xs6>
              <v-checkbox> </v-checkbox>
            </v-flex>
          </v-flex>
          <v-flex class="test pt-4" xs4 row wrap>
            <v-flex xs6>
              <div class="float-left">
                <v-card-text style="font-size:1em">Short Id Check</v-card-text>
              </div>
              <v-checkbox> </v-checkbox>
            </v-flex>
          </v-flex>

          <v-flex class="test"   xs4 row wrap>
            <v-flex xs6 id="t1">
              <v-radio-group v-model="radios" :mandatory="false">
                <v-radio label="Ongoing" value="radio-1"></v-radio>
                <v-radio label="Pending" value="radio-2"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs6 id="txt">
              <v-text-field class="solo" solo></v-text-field>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      due: null,
      due1: null,
      radios: "radio-1",
      os: ["Oreo", "Kitkat", "Donut", "Froyo"]
    };
  }
};
</script>

<style scoped>
.task1 {
  /* padding: 10; */
  max-width: 1400px;
  margin-top: 220px;
}

.test {
  padding: 0 25px;
}
.solo {
  max-width: 100px;
}
#txt {
  padding-top: 25px;
}
#t1 {
  padding-left: 80px;
}
.field {
  text-align: left;
  float: left;
}
.d1{
   text-align: left;
  float: left;
  margin-left: 50px;
}
.t2{
  padding-right: 30px
}
</style>
