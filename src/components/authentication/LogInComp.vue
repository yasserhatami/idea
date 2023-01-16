<template lang="">
    <div>
        <div class="bg-logingray dark:bg-sky ">
            <div class="p-0 m-0 bg-loginbackground z-0  shadow-lg">
                <div class="p-9 lg:flex dark:bg-black">
                    <div class="w-full lg:w-1/2 flex justify-center items-center  bg-white shadow-lg rounded ">
                        <div class=" w-full">
                            <h2 class="text-xl text-center font-semibold pt-2 md:pt-7">Login to continue</h2>
                            <p class="text-lg font-semibold text-center plogin pt-5">Please enter your username and password to log in</p>
                            <form>
                              <div class="p-8">

                                  <div class="text-center">
                                    <p class="text-danger" v-if="notMatchWarn">The username or password is incorrect,try again</p>
                                  </div>
                                
                                  <label for="username" class="block mb-1  font-medium">Username</label>
                                  <input  id="username"  :class="{valueIsNotValid : !!v$.userName.$error}" @blur="v$.userName.$touch" v-model="v$.userName.$model" class="bg-logingray outline-0 pl-3 w-full h-12 rounded" type="text" autocomplete="on">
                                  <div class="text-danger" v-if="v$.userName.required.$invalid && v$.userName.$dirty">required</div>
                                  <div  class="text-danger" v-if="v$.userName.minLength.$invalid">At least 8 characters</div>
                                  
                                

                                  <label for="Password" class="block mb-1 font-medium mt-4">Password</label>
                                  <input id="password" 
                                  :class="{valueIsNotValid : !!v$.password.$error}"
                                   @blur="v$.password.$touch" v-model="v$.password.$model" 
                                  class="bg-logingray outline-0 pl-3 w-full h-12  rounded "
                                  type="password"
                                  autocomplete="on">
                                  <div class="text-danger" v-if="v$.password.required.$invalid && v$.password.$dirty">required</div>
                                  <div  class="text-danger" v-if="v$.password.minLength.$invalid">At least 8 characters</div>

                              </div>
                              <div class="text-center  mb-1">
                                  <button type="submit"  @click.prevent="authorize"  class="button dark:bg-black  text-white transition-all py-3 px-14 rounded bg-loginbuttun">
                                      Log In
                                  </button>
                              </div>
                            </form>
                            <div class="text-center mb-1">
                              <router-link class="gotoregister" to="/authentication/register">Don't have an account? Create one</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="loginimage w-full lg:w-1/2 h-full  rounded">
                        <img class="h-full" src="../../assets/images/loginimg.jpg" alt="image broken">
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import auth from '@/services/auth.js'
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      notMatchWarn : false,
      userName: "",
      password: "",
      rememberMe: true,
    };
  },
  validations() {
    return {
      userName: { required, minLength: minLength(8) },
      password: { required, minLength: minLength(8) },
    };
  },
  methods: {
    authorize() {

     if(this.v$.userName.$invalid){
       let username = document.getElementById('username');
       username.focus()

     }else if(this.v$.password.$invalid){
      let password = document.getElementById('username');
      password.focus();

     }else{
      auth
        .login({
          userName: this.userName,
          password: this.password,
          rememberMe: true,
        })
        .then((response) => {
          localStorage.setItem('token', `Bearer ${response.result.token}`)
          console.log(response);
          if(response.statusCode == '200'){
            if(response.result.status == true){
              this.$router.push('/')
            }else{
              
              this.notMatchWarn = true;
              setTimeout(()=>{
                
              this.notMatchWarn = false;
              },4000)
              let username = document.getElementById('username');
              username.focus()
            }
          }
          
        })
        .catch((response)=>{
          alert(response.name)
        });
     }
    },
  },
};
</script>
<style scoped>
.plogin {
  color: #4457a0;
}
.gotoregister{
  transition: color 0.7s;
  color: #4457a0;
}
.gotoregister:hover{
  color: blue;
}
.button {
  border: 1px solid #8083f2;
}
.button:hover {
  background-color: white;
  color: #8083f2;
}

.valueIsNotValid {
  border: 1px solid red;
}
</style>