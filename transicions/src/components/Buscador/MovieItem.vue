<template>
 <transition name="slide-fade" mode="in-out">
    <div class="col-sm-6 mb-3">
       
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">{{ movie.title }}</h5>
                <h6 class="card-subtitle">Available: {{ movie.available }}</h6>
            </div>
            <div class="card-body">
                <p class="card-text">{{ movie.description }}</p>
            </div>
        </div>
      
    </div>
      </transition>
</template>
<script>
export default {
    props:{
        movie:{
            type: Object,
            required: true
        }
    }
}
</script>

<style>



.slide-fade-enter-active{
    transition: all .6s ease;
}
.slide-fade-leave-active{
    transition: all .3s cubic-bezier(.17,.67,.83,.67);
}
.slide-fade-enter, .slide-fade-leave-to{
    transform: translateY(800px);
    opacity: 0;
}
</style>

