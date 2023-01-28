<template lang="">
    <div>
        <div class="bg-logingray dark:bg-sky ">
            <div class="p-0 m-0 bg-loginbackground z-0  shadow-lg">
                <div class="p-9  dark:bg-black flex justify-center items-center">
                    <div class="w-full md:w-4/5  flex justify-center items-center  bg-white shadow-lg rounded ">
                        <div class=" w-full ">
                            <h2 class="text-xl text-center font-semibold pt-2 md:pt-7">{{ $t('Authentication.register.Please Register') }}</h2>
                            <form>

                              <div class="p-8 md:grid grid-cols-6 gap-4 justify-center">
                                <div class="md:mr-9 col-span-3 ">
                                        <!-- DisplayName -->
                                    <label  for="DisplayName" class="block mb-1  font-medium">{{ $t('Authentication.register.DisplayName') }}</label>
                                    <input  :class="{valueIsNotValid : !!v$.DisplayName.$error}" @blur="v$.DisplayName.$touch" v-model="v$.DisplayName.$model" id="DisplayName" class="bg-logingray outline-0 pl-3 w-full h-12 rounded" type="text" autocomplete="on">
                                    <div class="text-danger" v-if="v$.DisplayName.required.$invalid && v$.DisplayName.$dirty">{{ $t('Authentication.vulidate.required') }}</div>

                                    <!-- Username -->
                                    <label for="username" class="block mb-1  font-medium">{{ $t('Authentication.register.Username') }}</label>
                                    <input  id="username"  :class="{valueIsNotValid : !!v$.userName.$error}" @blur="v$.userName.$touch" v-model="v$.userName.$model" class="bg-logingray outline-0 pl-3 w-full h-12 rounded" type="text" autocomplete="on">
                                    <div class="text-danger" v-if="v$.userName.required.$invalid && v$.userName.$dirty">{{ $t('Authentication.vulidate.required') }}</div>
                                    <div  class="text-danger" v-if="v$.userName.minLength.$invalid">{{ $t('Authentication.vulidate.At least 8 characters') }}</div>

                                    <!-- Email -->
                                    <label for="email" class="block mb-1  font-medium">{{ $t('Authentication.register.Email') }}</label>
                                    <input  v-model="v$.Email.$model" type="email" id="Email" class="bg-logingray outline-0 pl-3 w-full h-12 rounded" @blur="v$.Email.$touch" :class="{valueIsNotValid : !!v$.Email.$error}" autocomplete="on">
                                    <div class="text-danger" v-if="v$.Email.required.$invalid && v$.Email.$dirty">{{ $t('Authentication.vulidate.required') }}</div>
                                    <div  class="text-danger" v-if="v$.Email.email.$invalid">enter a invalid email</div>
                                    <!-- ConfirmEmail -->
                                    <label for="ConfirmEmail" class="block mb-1  font-medium">{{ $t('Authentication.register.ConfirmEmail') }}</label>
                                    <input  v-model="v$.ConfirmEmail.$model" type="email" id="ConfirmEmail" class="bg-logingray outline-0 pl-3 w-full h-12 rounded"  @blur="v$.ConfirmEmail.$touch,match" :class="{valueIsNotValid : !!v$.ConfirmEmail.$error}" autocomplete="on">
                                    <div class="text-danger" v-if="v$.ConfirmEmail.required.$invalid && v$.Email.$dirty">{{ $t('Authentication.vulidate.required') }}</div>
                                    <div  class="text-danger"  v-else-if="v$.ConfirmEmail.sameAsEmail.$invalid">not match</div>
                                    <!-- Password -->
                                    <label for="Password" class="block mb-1  font-medium">{{ $t('Authentication.register.Password') }}</label>
                                    <div class="flex justify-center items-center bg-logingray outline-0 pl-3 w-full h-12 rounded" :class="{valueIsNotValid : !!v$.Password.$error}">
                                      <input  v-model="v$.Password.$model" type="Password" id="Password" class="  w-full h-full bg-logingray outline-0 p-0"  @blur="v$.Password.$touch"  autocomplete="on">
                                      <div @click="changeEye" class="cursor-pointer mr-3">
                                        <font-awesome-icon v-if="showpass" :icon="['fas', 'eye']" />
                                        <font-awesome-icon v-else :icon="['fas', 'eye-slash']" />
                                      </div>
                                    </div>
                                    <div class="text-danger" v-if="v$.Password.required.$invalid && v$.Password.$dirty">{{ $t('Authentication.vulidate.required') }}</div>
                                    <div  class="text-danger" v-if="v$.Password.minLength.$invalid">At least 8 characters</div>
                                    <!-- confirmPassword -->
                                    <label for="confirmPassword" class="block mb-1  font-medium">{{ $t('Authentication.register.confirmPassword') }}</label>
                                    <div class="flex justify-center items-center bg-logingray outline-0 pl-3 w-full h-12 rounded" :class="{valueIsNotValid : !!v$.confirmPassword.$error}">
                                      <input  v-model="v$.confirmPassword.$model" type="Password" id="confirmPassword" class="  w-full h-full bg-logingray outline-0 p-0"  @blur="v$.confirmPassword.$touch"  autocomplete="on">
                                      <div @click="changeEye2" class="cursor-pointer mr-3">
                                        <font-awesome-icon v-if="showpass2" :icon="['fas', 'eye']" />
                                        <font-awesome-icon v-else :icon="['fas', 'eye-slash']" />
                                      </div>
                                    </div>
                                    <div class="text-danger" v-if="v$.confirmPassword.required.$invalid && v$.confirmPassword.$dirty">{{ $t('Authentication.vulidate.required') }}</div>
                                    <div  class="text-danger" v-else-if="v$.confirmPassword.minLength.$invalid">{{ $t('Authentication.vulidate.At least 8 characters') }}</div>
                                    <div  class="text-danger"   v-else-if="v$.confirmPassword.sameAsPassword.$invalid">not match</div>
                                </div>

                                <div class="col-span-3">
                                  <!-- PhoneNumber -->
                                  <label for="PhoneNumber" class="block mb-1  font-medium">{{ $t('Authentication.register.PhoneNumber') }}</label>
                                  <input  id="PhoneNumber"  :class="{valueIsNotValid : !!v$.PhoneNumber.$error}" @blur="v$.PhoneNumber.$touch" v-model="v$.PhoneNumber.$model" class="bg-logingray outline-0 pl-3 w-full h-12 rounded" type="number" autocomplete="on">
                                  <div class="text-danger" v-if="v$.PhoneNumber.required.$invalid && v$.PhoneNumber.$dirty">{{ $t('Authentication.vulidate.required') }}</div>
                                  <!-- Bio -->
                                  <label for="Bio" class="block mb-1  font-medium">Bio</label>
                                  <input  id="Bio"  :class="{valueIsNotValid : !!v$.Bio.$error}" @blur="v$.Bio.$touch" v-model="v$.Bio.$model" class="bg-logingray outline-0 pl-3 w-full h-12 rounded" type="text" autocomplete="on">
                                  <div class="text-danger" v-if="v$.Bio.required.$invalid && v$.Bio.$dirty">{{ $t('Authentication.vulidate.required') }}</div>
                                  <!-- image -->
                                  <label for="image" class="block mb-1  font-medium">image</label>
                                  <input @change="load" accept="image/*" id="file" class=" rounded" type="file">
                                </div>

                              </div>
                              <div class="flex justify-center mt-3">
                                    <button class=" button dark:bg-black  text-white transition-all py-3 px-14 rounded bg-loginbuttun" type="submit" @click.prevent="registerUSer" >{{ $t('Authentication.register.submit') }}</button>
                              </div>

                            </form>

                            <div class="text-center mb-1">
                              <router-link class="gotologin" to="/authentication/login">{{ $t('Authentication.register.Do you have an account?click & Log In') }}</router-link>
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
import { required, minLength, email, sameAs } from "@vuelidate/validators";
import auth from "@/services/auth.js";
export default {
  name: "RegisterComp",
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      showpass: false,
      showpass2: false,
      DisplayName: "",
      userName: "",
      Email: "",
      ConfirmEmail: "",
      Password: "",
      confirmPassword: "",
      PhoneNumber: "",
      Bio: "",
      image: "",
    };
  },

  validations() {
    return {
      DisplayName: { required },
      userName: { required, minLength: minLength(8) },
      Email: { required, email },
      ConfirmEmail: { required, email, sameAsEmail: sameAs(this.Email) },
      Password: { required, minLength: minLength(8) },
      confirmPassword: {
        required,
        minLength: minLength(8),
        sameAsPassword: sameAs(this.Password),
      },
      PhoneNumber: { required },
      Bio: { required },
      image: { required },
    };
  },
  methods: {
    changeEye: function () {
      if (document.getElementById("Password").type == "text") {
        document.getElementById("Password").type = "Password";
        this.showpass = false;
      } else {
        document.getElementById("Password").type = "text";
        this.showpass = true;
      }
    },
    changeEye2: function () {
      if (document.getElementById("confirmPassword").type == "text") {
        document.getElementById("confirmPassword").type = "Password";
        this.showpass = false;
      } else {
        document.getElementById("confirmPassword").type = "text";
        this.showpass = true;
      }
    },
    
    load() {
      if (document.querySelector("#file").value == "") {
        return;
      }
      const file = document.querySelector("#file").files[0];
      this.image = file;
    },

    registerUSer() {
      if (this.v$.$invalid) {
        this.v$.$touch();
      }
      console.log('kooon');
      let bodyFormData = new FormData();
      const payload = {
        phonNumber: this.PhoneNumber,
        bio: this.Bio,
        displayName: this.DisplayName,
        userName: this.userName,
        images: this.image,
        confirmPassword: this.confirmPassword,
        password: this.Password,
        confirmEmail: this.ConfirmEmail,
        email: this.Email,
      };
      for (const key in payload) {
        bodyFormData.append(key, payload[key]);
      }

      const res = auth.register(bodyFormData, {
        "Content-Type": "multipart/form-data",
        accept: "text/plain",
      });
      res.then(() => {
        this.$router.push("/authentication/login");
      });
    },
  },
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
.button {
  border: 1px solid #8083f2;
}
.button:hover {
  background-color: white;
  color: #8083f2;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type=number] {
}
</style>