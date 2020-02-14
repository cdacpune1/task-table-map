<template>

<v-dialog max-width="600px">
    <template  v-slot:activator="{on}">
<v-btn text class="success"
v-on="on"
>Add_New_Project</v-btn>
    </template>
<v-card>
    <v-card-title>
        <h2>Add_@_New_Project</h2>
    </v-card-title>
    
    
    <v-card-text>
        <v-form class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="work" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="edit"  :rules="inputRules"></v-textarea>
            
            <v-menu>
                <template v-slot:activator="{on}"> 
                <v-text-field :value="due" v-on="on" label="Due Date" prepend-icon="date_range" ></v-text-field>
                </template>
                <v-date-picker v-model="due"></v-date-picker>
                
            </v-menu>
            <v-btn class="info mx-0 mt-3" @click="submit" :loading="loading">Add_Project</v-btn>
            
        </v-form>
    </v-card-text>
</v-card>

</v-dialog> 

</template>
<script>

export default{
data(){
    return{
        title:'',
        content:'',
        due:null,
        inputRules:[
            v => v.length >= 3 || 'Minimum Length is 3 Char'
        ],
        loading:false
    }
},
methods: {
submit(){
if(this.$refs.form.validate()){
// eslint-disable-next-line no-console
console.log( this.title ,this.content);
// eslint-disable-next-line no-debugger

this.$emit('projadded')
}



}
}
}
</script>