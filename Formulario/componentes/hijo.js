Vue.component('hijo',{

    template://html
    `
    <div>
     
    <button type="submit" class="btn btn-primary" @click="validar()">Enviar</button>
  


    </div>
    `,
    data(){
        return{
            errores:[
                nom1='',
                nom2='',
                mobil='',
                codipostal='',
                email1='',
                email2='',
                psw1='',
                psw2='',
                psw3='',

            ],
           
        }
    },
    props:{
        nomrecibido:'',
        emailrecibido:'',
        mobilrecibido:'',
        codipostalrecibido:'',
        pswrecibido:'',
        pswrecibido2:'',
    },
   
    methods: {
        validar(){
            
            this.errores = [];
            if(!this.nomrecibido)this.errores.nom1 = "El nombre es requerido";
            else if(this.nomrecibido.length <6 || this.nomrecibido.length >13)this.errores.nom2 = "El nombre no cumple requisitos";
            if(!this.mobilrecibido)this.errores.mobil="El mobil es requerido";
            if(!this.codipostalrecibido)this.errores.codipostal="El código postal es requerido";
            if(!this.emailrecibido)this.errores.email1 = "El email es requerido";
            else if (!this.validar_email(this.emailrecibido))
                this.errores.email2 = "El email no cumple los requisitos";
            if(!this.pswrecibido)this.errores.psw1 = "El password es requerido";
            else if (!this.validar_psw(this.pswrecibido))
            this.errores.psw2 = "El password no cumple los requisitos";
            if(!this.pswrecibido2)this.errores.psw3 = "Repita el password";
            else if(this.pswrecibido2 != this.pswrecibido)this.errores.pws3= "El password no coincide";
            

            this.$emit('escucharhijo', this.errores);
            //console.log(this.errores)
          
            

        },

            validar_email: function(email) {
                var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email) ? true : false;
            },
            validar_psw(psw) {
                var regex = /(?=^.{6,13}$)((?=.*\w)(?=.*[A-Z])(?=.*[0-9]))^./;
                    
                return regex.test(psw) ? true : false;
            }
        }
        
    
    
   
})

   