<template>

    <div class="team1">
        <h1 class="subheading grey--text">Team_1</h1>
        <v-container class="my-5 ">

<v-layout row wrap >
    <v-flex xs12 sm6 md4 lg3 v-for="person in team1" :key="person.name">
        <v-card  shaped flat color="#B0BEC5" class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                  <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
        <v-card-text>
            <div class="subheading text-uppercase">{{person.name}}</div>
            <div class="black--text">{{person.role}}</div>
        </v-card-text>
        <v-card-actions>
<v-btn depressed  color="lightgrey">
    <v-icon small left>message</v-icon>
    <span>Message</span>
</v-btn>
        </v-card-actions>
        </v-card>
    </v-flex>
</v-layout>
        </v-container>
    </div>



</template>




<script>
export default {
    data(){
        return{
            team1 :[
                {name:'The ninja',role:'Web Dev',avatar:'/avatar-1.png'},
                {name:'Oggy',role:'Tester',avatar:'/avatar-2.png'},
                {name:'Mike',role:'Sales',avatar:'/avatar-3.png'},
                {name:'Riyu',role:'Graphic Designer',avatar:'/avatar-4.png'}
            ]
        }
    }
}
</script>