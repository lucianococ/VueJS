<template>
    <div>
        <h1>{{$route.params.id}}</h1>
         <router-link to="/client"><button class="btn btn-danger"> Volver</button></router-link> 
    </div>
   
</template>

<script>

export default {
    name: 'Clientes'
}
</script>