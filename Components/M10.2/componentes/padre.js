Vue.component('padre',{
    template:
    `
    <div class=" bg-danger">
        <h1>{{mensaje}}</h1> 
        <hijo></hijo> 
    </div>

    `,
    data (){
        return{
            mensaje: "Soc el pare"
        }
        
    }

    
}) 