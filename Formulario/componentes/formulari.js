Vue.component('formulari', {
    template: //html
        `
<div>
<div class="row">
<div class="container">
    <div class="col-8">
        
    <form class="mt-3" id="myform" @submit.prevent="">
    <div>
    <custominput @escucharhijo="comprobar"
            v-bind:value="nom"
            v-on:input="nom = $event"
            tipo="nom"
            
    ></custominput>
        </div>
        <span class="text-danger">{{erroresrecibidos.nom1}}</span>
        <span class="text-danger">{{erroresrecibidos.nom2}}</span>
        <div>
    <custominput @escucharhijo="comprobar"
            v-bind:value="mobil"
            v-on:input="mobil = $event"
            tipo="mobil"
    ></custominput>
    </div>
    <span class="text-danger">{{erroresrecibidos.mobil}}</span>

    <div>
    <custominput @escucharhijo="comprobar"
            v-bind:value="email"
            v-on:input="email = $event"
            tipo="email"
    ></custominput>
    </div>
    <span class="text-danger">{{erroresrecibidos.email1}}</span>
<span class="text-danger">{{erroresrecibidos.email2}}</span>

    <div>
    <custominput @escucharhijo="comprobar" 
            v-bind:value="codipostal"
            v-on:input="codipostal = $event"
            tipo="codipostal"
    ></custominput>
    </div>
    <span class="text-danger">{{erroresrecibidos.codipostal}}</span>
    <div>
    <custominput @escucharhijo="comprobar"
            v-bind:value="pass1"
            v-on:input="pass1 = $event"
            tipo="pass1"
    ></custominput>
    </div>
    <span class="text-danger">{{erroresrecibidos.psw1}}</span>
            <span class="text-danger">{{erroresrecibidos.psw2}}</span>
    <div>
    <custominput @escucharhijo="comprobar" @escucharhijo2="comprobar2"
            v-bind:value="pass2"
            v-on:input="pass2 = $event"
            tipo="pass2"
    ></custominput>  
    </div>
    <span class="text-danger">{{erroresrecibidos.psw3}}</span>

    </form>
     
    
   
        </div>  
  
        <button type="submit" class="btn btn-primary" @click="validar">Enviar</button>
 
        
    </div>

 </div>

</div>
    
       
    `,
    data() {
        return {

            nom: '',
            mobil: '',
            codipostal: '',
            email: '',
            pass1: '',
            pass2: '',
            confirmacion: '',
            erroresrecibidos: [
                nom1 = '',
                nom2 = '',
                mobil = '',
                codipostal = '',
                email1 = '',
                email2 = '',
                psw1 = '',
                psw2 = '',
                psw3 = '',
            
            ],
        }

    },
    methods:{
                
                comprobar(value) {
                        this.erroresrecibidos = value;
                },
                comprobar2(value) {
                        this.confirmacion = value;
                        console.log(this.confirmacion)
                },
                validar(){
                        if(this.confirmacion == 0){
                                alert('Debes completar los campos')
                        }
                        else if(this.erroresrecibidos.length > 0 ){
                                alert('ta todo way')
                        } else alert('ta todo mal');
                        
                                
                }



}



})

    



