<template>

 <div >
<b-button @click="show=true" variant="primary">Cambio</b-button>

  <transition name="bounce">
   
    <b-modal  v-model="show"
    no-fade 
    >
     <template #modal-header>
      <b-container fluid>
        <b-row class="mb-1 text-center">
         
           <h1>Cambio Euro €</h1>
        </b-row>
      </b-container>
      
    </template>
    <template>
      <b-container fluid>
        
        
        <ModalBootstrap>
          
        </ModalBootstrap>
      </b-container>
      
    </template>
      <template #modal-footer>
        <div class="w-100">
          
          <b-button @click="show=false">Close</b-button>
        </div>
      </template>
    </b-modal>
   
    </transition>
    
</div>
  
</template>
<script>
import ModalBootstrap from '../Modal/ModalBootstrap.vue'
 export default {
   components:{
     ModalBootstrap
   },
    data() {
      return {
        show: false,
        
       
      }
    }
  }
</script>
<style>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>