import { required, minlength } from "vuelidate/lib/validators";
export default{
    data()
    {
        return{
            name:"",
            error: false
        };
    },
    methods:
    {
        Sendform()
        {
            this.$v.$touch();
            if(this.$v.$invalid)this.error = true;
        }
    },
    validations:
    {
        name:{
            required,
            minlength: minlength(5)
        }
    },
    watch:
    {
        name(oldValue, newValue)
        {
            console.log("Old " + oldValue);
            console.log("New " + newValue)
        }
    }
};
