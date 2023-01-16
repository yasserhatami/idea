<template lang="">
    <div>
        <div class="bg-logingray dark:bg-sky ">
            <div class="p-0 m-0 bg-loginbackground z-0  shadow-lg">
                <div class="p-9  dark:bg-black">
                    <div class="w-full  flex justify-center items-center  bg-white shadow-lg rounded ">
                        <div class=" w-full">
                            <h2 class="text-xl text-center font-semibold pt-2 md:pt-7">Please Register</h2>
                            <p class="text-lg font-semibold text-center plogin pt-5">Please fill in all fields to register</p>

                            <form>

                              <div class="p-8">
                                <!-- DisplayName -->
                                <label  for="DisplayName" class="block mb-1  font-medium">DisplayName</label>
                                <input  :class="{valueIsNotValid : !!v$.DisplayName.$error}" @blur="v$.DisplayName.$touch" v-model="v$.DisplayName.$model" id="DisplayName" class="bg-logingray outline-0 pl-3 w-full h-12 rounded" type="text" autocomplete="on">
                                <div class="text-danger" v-if="v$.DisplayName.required.$invalid && v$.DisplayName.$dirty">required</div>

                                <!-- Username -->
                                <label for="username" class="block mb-1  font-medium">Username</label>
                                <input  id="username"  :class="{valueIsNotValid : !!v$.userName.$error}" @blur="v$.userName.$touch" v-model="v$.userName.$model" class="bg-logingray outline-0 pl-3 w-full h-12 rounded" type="text" autocomplete="on">
                                <div class="text-danger" v-if="v$.userName.required.$invalid && v$.userName.$dirty">required</div>
                                <div  class="text-danger" v-if="v$.userName.minLength.$invalid">At least 8 characters</div>

                                <!-- Email -->
                                <label for="email" class="block mb-1  font-medium">Email</label>
                                <input  v-model="v$.Email.$model" type="email" id="Email" class="bg-logingray outline-0 pl-3 w-full h-12 rounded" @blur="v$.Email.$touch" :class="{valueIsNotValid : !!v$.Email.$error}" autocomplete="on">
                                <div class="text-danger" v-if="v$.Email.required.$invalid && v$.Email.$dirty">required</div>
                                <div  class="text-danger" v-if="v$.Email.email.$invalid">enter a invalid email</div>
                                <!-- ConfirmEmail -->
                                <label for="ConfirmEmail" class="block mb-1  font-medium">ConfirmEmail</label>
                                <input  v-model="v$.ConfirmEmail.$model" type="email" id="Email" class="bg-logingray outline-0 pl-3 w-full h-12 rounded"  @blur="v$.ConfirmEmail.$touch,match" :class="{valueIsNotValid : !!v$.ConfirmEmail.$error}" autocomplete="on">
                                <div class="text-danger" v-if="v$.ConfirmEmail.required.$invalid && v$.Email.$dirty">required</div>
                                <div  class="text-danger"  v-else-if="v$.ConfirmEmail.sameAsEmail.$invalid">not match</div>
                                <!-- Password -->
                                <label for="Password" class="block mb-1  font-medium">Password</label>
                                <div class="flex justify-center items-center bg-logingray outline-0 pl-3 w-full h-12 rounded" :class="{valueIsNotValid : !!v$.Password.$error}">
                                  <input  v-model="v$.Password.$model" type="Password" id="Password" class="  w-full h-full bg-logingray outline-0 p-0"  @blur="v$.Password.$touch"  autocomplete="on">
                                  <div @click="changeEye" class="cursor-pointer mr-3">
                                    <font-awesome-icon v-if="showpass" :icon="['fas', 'eye']" />
                                    <font-awesome-icon v-else :icon="['fas', 'eye-slash']" />
                                  </div>
                                </div>
                                <div class="text-danger" v-if="v$.Password.required.$invalid && v$.Password.$dirty">required</div>
                                <div  class="text-danger" v-if="v$.Password.minLength.$invalid">At least 8 characters</div>
                                <!-- confirmPassword -->
                                <label for="confirmPassword" class="block mb-1  font-medium">confirmPassword</label>
                                <div class="flex justify-center items-center bg-logingray outline-0 pl-3 w-full h-12 rounded" :class="{valueIsNotValid : !!v$.confirmPassword.$error}">
                                  <input  v-model="v$.confirmPassword.$model" type="Password" id="confirmPassword" class="  w-full h-full bg-logingray outline-0 p-0"  @blur="v$.confirmPassword.$touch"  autocomplete="on">
                                  <div @click="changeEye2" class="cursor-pointer mr-3">
                                    <font-awesome-icon v-if="showpass2" :icon="['fas', 'eye']" />
                                    <font-awesome-icon v-else :icon="['fas', 'eye-slash']" />
                                  </div>
                                </div>
                                <div class="text-danger" v-if="v$.confirmPassword.required.$invalid && v$.confirmPassword.$dirty">required</div>
                                <div  class="text-danger" v-else-if="v$.confirmPassword.minLength.$invalid">At least 8 characters</div>
                                <div  class="text-danger"   v-else-if="v$.confirmPassword.sameAsPassword.$invalid">not match</div>
                                <!-- PhoneNumber -->
                                <label for="PhoneNumber" class="block mb-1  font-medium">PhoneNumber</label>
                                <input  id="PhoneNumber"  :class="{valueIsNotValid : !!v$.PhoneNumber.$error}" @blur="v$.PhoneNumber.$touch" v-model="v$.PhoneNumber.$model" class="bg-logingray outline-0 pl-3 w-full h-12 rounded" type="text" autocomplete="on">
                                <div class="text-danger" v-if="v$.PhoneNumber.required.$invalid && v$.PhoneNumber.$dirty">required</div>
                                <!-- Bio -->
                                <label for="Bio" class="block mb-1  font-medium">Bio</label>
                                <input  id="Bio"  :class="{valueIsNotValid : !!v$.Bio.$error}" @blur="v$.Bio.$touch" v-model="v$.Bio.$model" class="bg-logingray outline-0 pl-3 w-full h-12 rounded" type="text" autocomplete="on">
                                <div class="text-danger" v-if="v$.Bio.required.$invalid && v$.Bio.$dirty">required</div>
                                <!-- image -->
                                <label for="image" class="block mb-1  font-medium">image</label>
                                <input  id="image"  :class="{valueIsNotValid : !!v$.Bio.$error}"   class="  rounded" type="file">


                                

                              </div>

                            </form>

                            <div class="text-center mb-1">
                              <router-link class="gotologin" to="/authentication/login">Do you have an account?click & Log In</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, email,sameAs  } from "@vuelidate/validators";
// import auth from '@/services/auth.js'
export default {
  name: "RegisterComp",
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      showpass : false,
      showpass2 : false,
      DisplayName: "",
      userName: "",
      Email: "",
      ConfirmEmail : "",
      Password : "",
      confirmPassword : "",
      PhoneNumber : "",
      Bio : "",
    };
  },

  validations() {
    return {
      DisplayName: { required },
      userName: { required, minLength: minLength(8) },
      Email: { required, email },
      ConfirmEmail: { required, email,sameAsEmail: sameAs(this.Email), },
      Password : {required , minLength : minLength(8)},
      confirmPassword : {required , minLength : minLength(8),sameAsPassword: sameAs(this.Password)},
      PhoneNumber : {required},
      Bio: {required}
    };
  },
  methods:{
    changeEye: function() {
       if(document.getElementById('Password').type == "text") {
         document.getElementById('Password').type = "Password"
         this.showpass = false
       } else {
        document.getElementById('Password').type = "text"
        this.showpass = true
       }
     },
     changeEye2: function() {
       if(document.getElementById('confirmPassword').type == "text") {
         document.getElementById('confirmPassword').type = "Password"
         this.showpass = false
       } else {
        document.getElementById('confirmPassword').type = "text"
        this.showpass = true
       }
     }
  }
};
</script>
<style scoped>
.plogin {
  color: #4457a0;
}
.gotologin {
  transition: color 0.7s;
  color: #4457a0;
}
.gotologin:hover {
  color: blue;
}
.valueIsNotValid {
  border: 1px solid red;
}
</style>