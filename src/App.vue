<template>
  <v-app class="grey lighten-1">
<navbar />
    <v-content class ="mx-4">
      <router-view></router-view>
    </v-content>
  </v-app>
  
</template>

<script>
import navbar from '@/components/navbar'

export default {
  name: 'App',

components :{navbar},
 

  data: () => ({
    //
  }),
};
</script>
