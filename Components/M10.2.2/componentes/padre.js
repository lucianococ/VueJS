Vue.component ('padre',{
    template: //HTML
    `
    <div>
    <ul style="list-style-type: none">
    <li v-for ="item in items"> 
    <hijo :nombre=  "item.nombre" :cantidad="item.cantidad"></hijo>
    </li>
    </ul>
     

    </div> 
    `,
  
    
    data (){
        return{
            items: [
            {nombre: '1', cantidad:0},
            {nombre: '2', cantidad:0},
            {nombre: '3', cantidad:0}
        ]
        }
       
        
    }
    

});
