Vue.component('formulari', {
    template: //html
        `
<div>
<div class="row">
    <div class="col-8">
        <form class="mt-3" id="myform" @submit.prevent="">
            <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" class="form-control" id="nombre"  v-model="nominsert"  placeholder="Ingresa el nombre">   
            </div>
            <span class="text-danger">{{erroresrecibidos.nom1}}</span>
            <span class="text-danger">{{erroresrecibidos.nom2}}</span>
            <div class="form-group">
                <label for="mobil">Movil</label>
                <input type="number" class="form-control" id="mobil"  
                v-model="mobilinsert"  placeholder="Ingresa el movil">   
            </div>
            <span class="text-danger">{{erroresrecibidos.mobil}}</span>
            <div class="form-group">
                <label for="codipostal">Codigo Postal</label>
                <input type="number" class="form-control" id="codipostal"   v-model="codipostalinsert"  placeholder="Ingresa el codigo postal">   
            </div>
            <span class="text-danger">{{erroresrecibidos.codipostal}}</span>

             <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email"  v-model="emailinsert"  placeholder="Ingresa el nombre">   
                </div>
                <span class="text-danger">{{erroresrecibidos.email1}}</span>
                <span class="text-danger">{{erroresrecibidos.email2}}</span>
            <div class="form-group">
                <label for="psw">Password</label>
                <input type="text" class="form-control" id="psw"  v-model="pswinsert"  placeholder="Ingresa el password">   
            </div>
            <span class="text-danger">{{erroresrecibidos.psw1}}</span>
            <span class="text-danger">{{erroresrecibidos.psw2}}</span>
            <div class="form-group">
                <label for="psw2">Confirmar password</label>
                <input type="text" class="form-control" id="psw2"  v-model="pswinsert2"  placeholder="Repita el psasword">   
            </div>
             <span class="text-danger">{{erroresrecibidos.psw3}}</span>
              <br>
               <hijo :nomrecibido="nominsert" :mobilrecibido="mobilinsert" :codipostalrecibido= "codipostalinsert" :emailrecibido="emailinsert" :pswrecibido="pswinsert" :pswrecibido2="pswinsert2" @escucharhijo="erroreshijo"></hijo>
             


              

             </form>
        </div>
            
 </div>
      
</div>
    
       
    `,
    data() {
        return {

            nominsert: '',
            mobilinsert: '',
            codipostalinsert: '',
            emailinsert: '',
            pswinsert: '',
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
    methods:
    {
        erroreshijo(value) {
            this.erroresrecibidos = value;
            console.log(this.erroresrecibidos)

        }

    }


})
