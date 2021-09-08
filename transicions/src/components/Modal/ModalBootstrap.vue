<template>
     <div>
 
    <h3>Cambio de moneda</h3>
    <input type="txt" v-model="cambio" placeholder="Ingrese el valor">
    <p>El cambio de {{this.cambio | this.cambiomoneda}} € son {{this.cambio| conversion}} $</p>
    
    </div>
</template>


<script>

export default {
    name: 'ModalBootstrap',
     data(){
         return{
        cambio : '',
        cambiotxt: '', 
         }
              
    },
    
     filters: 
     {
        conversion (value) {
          if (!value) return ''
          return value * 1.23
        },
      
       cambiomoneda (value){
           if(!value) return ''
        this.cambiotxt = value
        return this.cambiotxt
        
        }
    },
    
}
</script>
