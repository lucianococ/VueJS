Vue.component('custominput', {
    props: ['value', 'tipo'],
    template://html
    `
    <div>
    <div class= "form-class">
        <label for="nombre">{{this.nom}}</label>
        <input class="form-control" v-bind:type="format"  :placeholder="boxtext" 
        v-on:input="$emit('input', $event.target.value)"
        
        
        >    

    </div>

    <br>
    </div>

    `,
    data(){
        return{
            boxtext:'',
            nom:'',
            format:'',
            info:'',
            confirmacion: '',
            data: {
                nominsert: '',
                mobilinsert: '',
                codipostalinsert: '',
                emailinsert: '',
                pswinsert: '',
                pswinsert2: ''
                
            },
            errores:{
                nom1:'',
                nom2:'',
                mobil:'',
                codipostal:'',
                email1:'',
                email2:'',
                psw1:'',
                psw2:'',
                psw3:'',
                
            }
      
        } 
    },
    watch:{
        value: function(value){
            this.errores =[];
            this.confirmacion = 0;

            if(this.tipo == "nom"){
                this.data.nominsert = this.value
                if(!this.data.nominsert){
                    this.errores.nom1 = "El nombre es requerido"
                 }
                 else if(this.data.nominsert.length <6 || this.data.nominsert.length >13){
                     this.errores.nom2 = "El nombre no cumple requisitos"
                 };
            }
            else if (this.tipo == "mobil"){
                this.data.mobilinsert= this.value;
                if(!this.data.mobilinsert){
                    this.errores.mobil="El mobil es requerido"
                 };
            } else if (this.tipo == "codipostal"){
                this.data.codipostalinsert= this.value; 
                if(!this.data.codipostalinsert){
                    this.errores.codipostal="El código postal es requerido"
                }; 
            } 
            else if (this.tipo == "email"){
                this.data.emailinsert= this.value;
                if(!this.data.emailinsert){
                    this.errores.email1 = "El email es requerido"
                };
                if (!this.validar_email(this.emailinsert)){
                    this.errores.email2 = "El email no cumple los requisitos"
                 };
                
            }else if (this.tipo == "pass1"){
                this.data.pswinsert= this.value;
                if(!this.data.pswinsert){
                    this.errores.psw1 = "El password es requerido"
                };
                if (!this.validar_psw(this.pswinsert)){
                    this.errores.psw2 = "El password no cumple los requisitos"
                 };
                
            } if(this.tipo == "pass2"){
                this.data.pswinsert2= this.value;  
                 if(this.data.pswinsert2 != this.data.pswinsert){
                    this.errores.psw3= "El password no coincide"}; 
            }
            this.confirmacion ++ ;
          this.$emit('escucharhijo', this.errores);
          this.$emit('escucharhijo2', this.confirmacion)
        }
            
           

    },
    methods:{ /*
        validar: function(){
           
            this.errores =[];
           if(!this.data.nominsert){
               this.errores.nom1 = "El nombre es requerido"
            }
            else if(this.data.nominsert.length <6 || this.data.nominsert.length >13){
                this.errores.nom2 = "El nombre no cumple requisitos"
            };
           if(!this.data.mobilinsert){
               this.errores.mobil="El mobil es requerido"
            };
           if(!this.data.codipostalinsert){
               this.errores.codipostal="El código postal es requerido"
           };
           if(!this.data.emailinsert){
               this.errores.email1 = "El email es requerido"
           };
           if (!this.validar_email(this.emailinsert)){
               this.errores.email2 = "El email no cumple los requisitos"
            };
           if(!this.data.pswinsert){
               this.errores.psw1 = "El password es requerido"
           };
           if (!this.validar_psw(this.pswinsert)){
               this.errores.psw2 = "El password no cumple los requisitos"
            };
            if(this.data.pswinsert2 != this.data.pswinsert){
                this.errores.psw3= "El password no coincide"};
           
            this.$emit('escucharhijo', this.errores);
            console.log(this.errores)
        },*/
        validar_email: function(email) {
            var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email) ? true : false;
        },
        validar_psw(psw) {
            var regex = /(?=^.{6,13}$)((?=.*\w)(?=.*[A-Z])(?=.*[0-9]))^./;
                
            return regex.test(psw) ? true : false;

        }

       },
    
   created(){
         
            switch(this.tipo) {
                case 'nom':
                    this.nom = 'Nom';
                    this.format = 'text';
                    this.boxtext= 'Ingrese el nombre';
                    this.errores.nom1='';
                    this.errores.nom2=''
                    break;
                case 'mobil':
                    this.nom = 'Móvil';
                    this.format = 'number';
                    this.boxtext= 'Ingrese el móvil';
                    this.errores.mobil=''
                    break;
                case 'codipostal':
                    this.nom = 'Código Postal';
                    this.format = 'number';  
                    this.boxtext= 'Ingrese el código postal';
                    this.errores.codipostal=''
                    break;
                case 'email':
                    this.nom = 'Email';
                    this.format = 'text';  
                    this.boxtext= 'Ingrese el email';
                    this.errores.email1='';
                    this.errores.email2=''
                    break;
                case 'pass1':
                    this.nom = 'Password';
                    this.format = 'text';  
                    this.boxtext= 'Ingrese el password';
                    this.errores.psw1='';
                    this.errores.psw2=''
                    break;
                case 'pass2':
                    this.nom = 'Confirmar Password';
                    this.format = 'text';  
                    this.boxtext= 'Repita el password';
                    this.errores.psw3=''
                    break;
                

    }
   



}
})