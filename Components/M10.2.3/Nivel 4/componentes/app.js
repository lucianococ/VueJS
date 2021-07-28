const app = new Vue ({
    el: '#app',
    data:{
        cambio : '',
        cambiotxt: '',        
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
   
     
    
    

    
   
})