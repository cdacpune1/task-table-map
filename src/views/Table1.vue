<template>
  <v-data-table
      v-model="selected"

    :headers="headers"
    :items="stdname"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'Students_Name',
            align: 'left',
            // sortable: false,
            value: 'name'
          },
          { text: 'Points', value: 'points' },
          { text: 'Physics', value: 'phy' },
          { text: 'Chemistry', value: 'chem' },
          { text: 'Maths', value: 'maths' },
          { text: 'Per (%)', value: 'per' }
        ],
        stdname: [
          {
            name: 'Santosh patil',
            points: 159,
            phy: 6.0,
            chem: 5.0,
            maths: 4.0,
            per: '13%'
          },
          {
             name: 'amar',
            points: 159,
            phy: 3.0,
            chem: 5.0,
            maths: 4.0,
            per: '21%'
          },
          {
            name: 'aks',
            points: 159,
            phy: 1.0,
            chem: 5.0,
            maths: 7.0,
            per: '16%'
          },
          {
            name: 'San',
            points: 29,
            phy: 1.0,
            chem: 6.0,
            maths: 4.0,
            per: '18%'
          },
          {
            name: 'tosh ',
            points: 19,
            phy: 2.0,
            chem: 5.0,
            maths: 4.0,
            per: '51%'
          },
          {
           name: 'obey',
            points: 9,
            phy: 1.0,
            chem: 2.0,
            maths: 4.0,
            per: '6%'
          },
          {
            name: 'antos ',
            points: 19,
            phy: 2.0,
            chem: 3.0,
            maths: 4.0,
            per: '11%'
          },
          {
            name: 'Riyu',
            points: 59,
            phy: 6.0,
            chem: 5.0,
            maths: 4.0,
            per: '1%'
          },
          {
            name: 'shanu ',
            points: 159,
            phy: 3.0,
            chem: 2.0,
            maths: 4.0,
            per: '7%'
          },
          {
            name: 'Prakash Gaud',
            points: 200,
            phy: 8.0,
            chem: 9.0,
            maths: 4.0,
            per: '10%'
          }
        ],
      }
    },
  }
</script>