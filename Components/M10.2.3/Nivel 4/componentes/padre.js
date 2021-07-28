Vue.component('padre', {
    template: //html
        `
    <div>
    <p>{{currentComponent}}</p>
    <modalbootstrap >  </modalbootstrap>
   
               
    </div>
    
    `,
    data (){
        return{
            currentComponent :"cerrar"
        }
    },
    component:
    {
        cerrar: 'vas a cerrar el modal'
    },
    methods:{
        currentComponent (value) {
            this.cerrar =value
            
        }
    }
    
   
    

})
