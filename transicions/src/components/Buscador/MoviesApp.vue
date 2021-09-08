<template>
    <div>
        <h1 class="text-center text-muted">Buscador de  Vuex</h1>
        <SearchForm/>
        <hr />
        <MovieList/>
    </div>
</template>
<script>
import SearchForm from '../Buscador/SearchForm.vue'
import MovieList from '../Buscador/MovieList.vue';

export default {
  
    components: {
        SearchForm, MovieList
        
    }
    
}
</script>