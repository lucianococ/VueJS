
<template>

    
<div class=" container ">
    <div class="animate__animated animate__bounceInLeft">
        
    <h1>Formulario</h1>
   
    <div class="row ">
   
    <div class="col-12">
         
        <form class="mt-3" id="myform" @submit.prevent="">
            
           
               
            <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" class="form-control" id="nombre"  v-model="data.nominsert"  placeholder="Ingresa el nombre">   
            </div>
             
      
         
            <span class="animate__animated animate__bounce text-danger">{{errores.nom1}}</span>
            <span class="text-danger">{{errores.nom2}}</span>
         
            <div class="form-group">
                <label for="mobil">Movil</label>
                <input type="number" class="form-control" id="mobil"  
                v-model="data.mobilinsert"  placeholder="Ingresa el movil">   
            </div>
            <span class="text-danger">{{errores.mobil}}</span>
            <div class="form-group">
                <label for="codipostal">Codigo Postal</label>
                <input type="number" class="form-control" id="codipostal"   v-model="data.codipostalinsert"  placeholder="Ingresa el codigo postal">   
            </div>
            <span class="text-danger">{{errores.codipostal}}</span>

             <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email"  v-model="data.emailinsert"  placeholder="Ingresa el nombre">   
                </div>
                <span class="text-danger">{{errores.email1}}</span>
                <span class="text-danger">{{errores.email2}}</span>
            <div class="form-group">
                <label for="psw">Password</label>
                <input type="text" class="form-control" id="psw"  v-model="data.pswinsert"  placeholder="Ingresa el password">   
            </div>
            <span class="text-danger">{{errores.psw1}}</span>
            <span class="text-danger">{{errores.psw2}}</span>
            <div class="form-group">
                <label for="psw2">Confirmar password</label>
                <input type="text" class="form-control" id="psw2"  v-model="data.pswinsert2"  placeholder="Repita el psasword">   
            </div>
             <span class="text-danger">{{errores.psw3}}</span>
              <br>
             </form>
            
              <button type="submit" class="btn btn-primary" @click="Validar()">Enviar</button>
             
        </div>
    </div>  
 
 </div>


</div>
  
</template>
<script>

export default  {
    name: 'Form',
    
    data(){
        return{
            data: {
            nominsert: '',
            mobilinsert: '',
            codipostalinsert: '',
            emailinsert: '',
            pswinsert: '',
            pswinsert2: ''
            },
            errores: {
                nom1 : '',
                nom2 : '',
                mobil: '',
                codipostal: '',
                email1: '',
                email2: '',
                psw1: '',
                psw2: '',
                psw3:'',

            }
               
        }
    },
 
     methods:{ 
         Validar(){
            
            this.errores = [];
            if(!this.data.nominsert)this.errores.nom1 = "El nombre es requerido";
            else if(this.data.nominsert.length <6 || this.data.nominsert.length >13)this.errores.nom2 = "El nombre no cumple requisitos";
            if(!this.data.mobilinsert)this.errores.mobil="El mobil es requerido";
            if(!this.data.codipostalinsert)this.errores.codipostal="El código postal es requerido";
            if(!this.data.emailinsert)this.errores.email1 = "El email es requerido";
            else if (!this.validar_email(this.emailinsert))this.errores.email2 = "El email no cumple los requisitos";
            if(!this.data.pswinsert)this.errores.psw1 = "El password es requerido";
            else if (!this.validar_psw(this.pswinsert))this.errores.psw2 = "El password no cumple los requisitos";
             if(this.data.pswinsert2 != this.data.pswinsert)this.errores.psw3= "El password no coincide";
   

        },
         
        validar_psw(psw) {
                var regex = /(?=^.{6,13}$)((?=.*\w)(?=.*[A-Z])(?=.*[0-9]))^./;
                    
                return regex.test(psw) ? true : false;
        },
        
        

    }
   
}  
    
</script>
