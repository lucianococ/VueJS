<template>
  <div class="client">
    <h1>Client</h1>
  <ul class="list-group">
    <li v-for="item of clientes" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">{{item.nombre}}
  
    <router-link :to="{ name: 'clientes', params: {id : item.nombre} }" ><button class="btn btn-danger">Ver {{item.nombre}}</button></router-link>
      
       </li>
  </ul>
  
    
   

  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
   name: 'Client',
   computed: {
     ...mapState(['clientes'])
   }
  
     
   
}
</script>

