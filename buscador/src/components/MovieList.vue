<template>
<div>
    
        
    <div class="row" v-if="movies.length > 0">
       
        <movie :movie="movie" v-for="movie in movies" :key="movie.id"></movie>
         
    </div>
    
    <div id="alert" v-else class="alert alert-danger"> No hay películas disponibles</div>
    <br>
   
</div>
</template>

<script>
    import Movie from '@/components/MovieItem.vue';
    import {mapGetters} from 'vuex';
export default {
    components:{
        Movie
    },
    computed:{
        ...mapGetters({
            movies:'filteredMovies',
        })
    }
    
}
</script>
<style scoped>
#alert{
    max-height: 20px;
}
</style>
