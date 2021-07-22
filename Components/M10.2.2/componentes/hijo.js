Vue.component ('hijo',{

    template: //html
    `
    <div>
    
            <div id="items" style="width: 350px; height: 100px;" class="pb-2 bg-white border border-success">
                <p>Item: {{nombre}}</p>
                <p> </p>
                <button class="btn btn-success" @click="cantidad++">{{cantidad}}</button>
            </div>
            
        </div>
        
   
    `,
   props:['nombre', 'cantidad']


});