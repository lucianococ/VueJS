<template>

 <div>
   
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Cambio Moneda
</button>


<!-- Modal -->
<div class="modal no-fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="animate__animated animate__bounceInUp">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Cambio Euro € / Dolar $</h5>
      </div>
      <div class="modal-body">
        <ModalBootstrap/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>

</div>
    
  </div>
  </div>  

  
</template>
<script>
import ModalBootstrap from '../Modal/ModalBootstrap.vue'
export default {
  components:{
    ModalBootstrap
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