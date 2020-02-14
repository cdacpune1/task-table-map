/* eslint-disable no-console */
<template>

<v-container id="card1">
    <v-layout row align-center>
    <v-flex xs12 sm4 offset-sm3>
        
<v-card color="#90CAF9"  class="align-self-center  mt-5"
>
    <v-card-title class="log"> Login </v-card-title>
    <v-card-text>
        <v-container>
            <form >
                <v-layout row>
                    <v-flex xs12>
                        <v-text-field
                        label="Email"
                        id="email"
                        v-model="email"
                required :rules="inputRules"
                       
                        >
                        </v-text-field>
  <v-text-field         
                        label="Password"
                        id="pass"
                        v-model="pass"
                required
                    :append-icon="value ? 'visibility_off' : 'visibility'"
                    @click:append="() => (value = !value)"
                    :type="value ? 'password' : 'text'"
                    :rules="inputRules"

                        ></v-text-field>


                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex >
                        <v-btn depressed @click="login" router :to="route">Submit</v-btn>
                    </v-flex>
                </v-layout>
            </form>
        </v-container>
</v-card-text>
</v-card>
    </v-flex>
    </v-layout>
</v-container>
</template>

<script>


 var obj = [
     {email1: 'aaa@123',pass1:'123123@'},
     {email1: 'aaa@111',pass1:'111111@'},
     ]
export default{
    
    data(){
        return {
            email:'',
            pass:'',
             inputRules:[
            v => v.length >= 7 || 'Minimum Length is 7 Char'
        ],
        value:String,
        route:'/task'
            
        }
    
    },
    methods:{
       

        login(){
            // eslint-disable-next-line no-debugger
            
            // eslint-disable-next-line no-debugger
for(let i=0;i<obj.length;i++){
           
         if(this.email == obj[i].email1 && this.pass== obj[i].pass1){
             i++;
            // eslint-disable-next-line no-console
         
 
            // eslint-disable-next-line no-console
            console.log({email:this.email,pass:this.pass});
        }
        }
        }
    }
}

</script>
<style scoped>
.log{
text-align: center;
margin-left: 110px;

}
#card1{
    margin-top: 200px;
}
</style>