<template>
<nav>

<v-snackbar v-model="snackbar" top color="success">
<span>Successfully_Login</span>
    <v-btn text color="white" @click="snackbar = false">Close</v-btn>

</v-snackbar>


    
                <v-app-bar
      app
      color="indigo"
      dark
    >
              <v-app-bar-nav-icon  color="grey" @click="drawer = !drawer "></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">First</span>
            <span>_Project</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y>
        <template v-slot:activator="{on}">
        <v-btn 
        text color="grey"
        v-on="on"
        >
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
        </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-title>{{link.text}}</v-list-item-title>

            </v-list-item>
        </v-list>
    </v-menu>

     <v-btn icon>
            <v-icon color="pink">mdi-heart</v-icon>
          </v-btn>
    <v-btn text color="grey" router :to="route"> 
        <span>Sign_Out</span>
        <v-icon right >exit_to_app</v-icon>
    </v-btn>
                    </v-app-bar>


    <v-navigation-drawer  v-model="drawer"  class="primary" app>
        <v-layout column align-center>
            <v-flex class="mt-4">
                <v-avatar size="80">
                    <img src="/avatar-1.png">
                </v-avatar>
                <p class="white--text subheading mt-1">The Ninja</p>

                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <popup  @projadded="snackbar=true"/>

                </v-flex>
        </v-layout> 
<v-list>
    <v-list-item v-for="(link,index) in links" :key="index" router :to="link.route">
        <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</v-list>

    </v-navigation-drawer>
</nav>
</template>

<script>
import popup from './popup'
export default {
    components:{ popup },
    data(){
        return{
            drawer: false,
            clipped:false,
            links:[
                {icon:'dashboard' , text:'Dashboard',route:'/'},
                {icon:'folder' , text:'About',route:'/about'},
                {icon:'person' , text:'Team',route:'/team'},
                {icon:'mdi-dialpad',text:'Team_1',route:'/team1'},
                {icon:'event',text:'Projects',route:'/proj'},
                {icon:'view_day',text:'Table1',route:'/table1'},
                {icon:'home',text:'Login',route:'/login'},
                {icon:'view_array',text:'Tablecard',route:'/tablecard'},
                {icon:'send',text:'Activity',route:'/activity'},
                {icon:'next_week',text:'ActivityCard',route:'/activitycard'}


            ],
route:'/login',
            snackbar:false
        
        }
    }
    
}
</script>