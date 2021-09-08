<template>

  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
   
    <Formulario/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Formulario from '@/components/Formulario/Formulario.vue'

export default {
  name: 'Home',
  components: {
    Formulario
  }
}
</script>
