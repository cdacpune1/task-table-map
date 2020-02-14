<template>
  <v-container fluid style="margin-top:140px">
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="indigo darken-5"
          dark
          flat
        >
          <v-toolbar-title>Std_Database</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Phy:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.phy }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Chem:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.chem }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Maths:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.maths }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Bio:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.bio }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Eng:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.eng }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Geo:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.geo }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Graphic:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.gra }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-toolbar
          class="mt-2"
          color="indigo"
          dark
          flat
        >
          <v-toolbar-title class="subheading ">TKIET</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-iterator>
  </v-container>
</template>



<script>
  export default {
    data: () => ({
      itemsPerPage: 4,
      items: [
        {
          name: 'Raj Patil',
          phy: 52,
          chem: 60,
          maths: 74,
          bio: 40,
          eng: 87,
          geo: 47,
          gra: 88,
        },
        {
          name: 'Avinash Molaj',
          phy: 52,
          chem: 40,
          maths: 64,
          bio: 48,
          eng: 67,
          geo: 77,
          gra: 98,
        },
        {
          name: 'Vivek Redekar',
          phy: 77,
          chem: 44,
          maths: 44,
          bio: 33,
          eng: 44,
          geo: 67,
          gra: 87,
        },
        {
          name: 'Rohan Jadhav',
          phy: 54,
          chem: 87,
          maths: 44,
          bio: 42,
          eng: 67,
          geo: 97,
          gra: 38,
        },
      ],
    }),
  }
</script>

