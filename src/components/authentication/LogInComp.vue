<template lang="">
    <div>
        <div class="bg-logingray dark:bg-sky container mx-auto">
            <div class="flex shadow-lg justify-center items-center md:h-44 h-32 text-2xl sm:text-3xl md:text-4xl  font-semibold z-10">
                <h1>Log in to your account</h1>
            </div>
            <div class="p-0 m-0 bg-loginbackground z-0  shadow-lg">
                <div class="p-9">
                    <div class="flex justify-center items-center  bg-white shadow-lg rounded ">
                        <div class=" w-full">
                            <h2 class="text-xl text-center font-semibold pt-2 md:pt-7">Login to continue</h2>
                            <p class="text-lg font-semibold text-center plogin pt-5">Please enter your username and password to log in</p>
                            <div class="p-8">
                                <label for="username" class="block mb-1  font-medium">Username</label>
                                <input class="bg-logingray outline-0 pl-3 w-full h-12 rounded" type="text" id="username">

                                <label for="username" class="block mb-1 font-medium mt-4">Password</label>
                                <input class="bg-logingray outline-0 pl-3 w-full h-12  rounded" type="text" id="username">
                            </div>
                            <div class="text-center  mb-5">
                                <button  class="button dark:bg-black  text-white transition-all py-3 px-14 rounded bg-loginbuttun">
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="loginimage">
                        <img src="" alt="">
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.plogin {
  color: #4457a0;
}
.button{
    
    border: 1px solid #8083F2;
}
.button:hover{
    background-color: white;
}

.loginimage{

}
</style>