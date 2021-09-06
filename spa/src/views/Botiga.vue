<template>
  <div class="botiga">
    <h1>Botiga</h1>
 

   <h1>{{ $route.params.nombre }}</h1>
  

<br>
<div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Alimentació" active>
        <b-card-text><Alimentacio></Alimentacio></b-card-text>
      </b-tab>
      <b-tab title="Congelats">
        <b-card-text><Congelats></Congelats></b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>


<br>

    
     <router-link to="/"><button class="btn btn-danger"> Volver</button></router-link> 
  

  </div>
</template>

<script>
import {mapState} from 'vuex';
import Alimentacio from '@/components/Alimentacio.vue';
import Congelats from '@/components/Congelats.vue'
export default {
  
 
  components:{
    Alimentacio,
    Congelats
 
    
  },
  computed: {
     ...mapState(['botigas'])
   }
  
   }
  
  
     
   


  

</script>