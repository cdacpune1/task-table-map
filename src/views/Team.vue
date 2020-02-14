<template>
    <div class="team">
        <h1 class="subheading grey--text">Team</h1>
        <v-container class="mx-5"> 
<v-layout row class="mb-3">
    <v-btn small  depressed @click="sortby('title')" >
        <v-icon left small>folder</v-icon>
        <span class="caption text-lowercase">By Proj Name</span>
    </v-btn>
    <!-- <span >Sort_By_Pro_Name</span> -->

    <v-spacer></v-spacer>
  
    <v-btn small depressed @click="sortby('person')" >
        <v-icon left small>person</v-icon>
        <span class="caption  text-lowercase">By Person</span>
    </v-btn>
  
</v-layout>
        
            <v-card  v-for="project in projects" :key="project.title" >
            <v-layout row wrap :class=" ` pa-3 project ${project.status}`">
            <v-flex xs12 md6 >
                <div class=" mx-5 caption black--text">Proj_Title</div>
                <div class="mx-5">{{project.title}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
                                <div class="caption black--text">Person</div>
                                <div>{{project.person}}</div>

            </v-flex>
             <v-flex xs6 sm4 md2>
                                <div class="caption black--text">Due by</div>
                                <div>{{project.due}}</div>

            </v-flex>
            <v-flex xs2 sm4 md2>
                                <!-- <div class="caption black--text">Status</div>
                                <div>{{project.status}}</div> -->
<!-- using chips -->
<div class="right">
    <v-chip small :class="`${project.status} black--text caption my-2`">{{project.status}}</v-chip>
</div>

            </v-flex>
            </v-layout>
            <v-divider></v-divider>
            </v-card>
             </v-container>
         </div>

</template>
<script >
export default{
    data(){
        return{
            projects:[
                {title:'Design a web site',person:'The Ninja',due:'1st jan 2012',status:'Ongoing',content:' A home page is generally the main page a visitor navigating to a website from a web search engine will see, and it may also serve as a '},
                {title:'Develop a web site',person:'The Mike',due:'11st sep 2011',status:'Complete',content:' A home page is generally the main page a visitor navigating to a website from a web search engine will see, and it may also serve as a '},
                {title:'Create web site',person:'The Oggy',due:'13st nov 2013',status:'Complete',content:' A home page is generally the main page a visitor navigating to a website from a web search engine will see, and it may also serve as a '},
                {title:'Vuetify a web site',person:'The Nicy',due:'21st july 2012',status:'Ongoing',content:' A home page is generally the main page a visitor navigating to a website from a web search engine will see, and it may also serve as a '}
            ]
        }
    },

methods: {
sortby(prop) {
this.projects.sort((a,b)=>a[prop] < b[prop] ? -1 : 1)
    }

 }
}

</script>

<style>
.project.Complete{
    border-left: 4px solid skyblue;
}
.project.Ongoing{
    border-left: 4px solid tomato;
}
.v-chip.Complete{
    background:skyblue 
}
.v-chip.Ongoing{
    background:tomato
}
</style>