<template>
    <div class="proj">
     <h1 class="subheading grey--text">Projects</h1>
     <v-container class="my-5">
<v-expansion-panels>
<v-expansion-panel v-for="project in myPro" :key="project.title">
             <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
             <v-expansion-panel-content >
                    <v-card>
                     <v-card-text class="px-4 grey--text">
                         <div class="font-weight-bold"> due by{{project.due}}</div>
                     <div>{{project.content}}</div>
                     </v-card-text>
                 </v-card>
             </v-expansion-panel-content>

</v-expansion-panel>
</v-expansion-panels>
     </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            projects:[
                {title:'Design a web site',person:'The Ninja',due:'1st jan 2012',status:'Ongoing',content:' A home page is generally the main page a visitor navigating to a website from a web search engine will see, and it may also serve as a '},
                {title:'Develop a web site',person:'The Mike',due:'11st sep 2011',status:'Complete',content:' A home page is generally the main page a visitor navigating to a website from a web search engine will see, and it may also serve as a '},
                {title:'Create web site',person:'The Ninja',due:'13st nov 2013',status:'Complete',content:' A home page is generally the main page a visitor navigating to a website from a web search engine will see, and it may also serve as a '},
                {title:'Vuetify a web site',person:'The Nicy',due:'21st july 2012',status:'Ongoing',content:' A home page is generally the main page a visitor navigating to a website from a web search engine will see, and it may also serve as a '}
            ]
        }
    },
    computed: {
        myPro(){
            
            return  this.projects.filter(project => {
                return project.person === 'The Ninja'
            })

            
        }
    }
}
</script>