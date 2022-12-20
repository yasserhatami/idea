<template>
  <div class="p-0 mr-1 relative z-0">
    <span  class=" rounded">
        <img class="w-7 h-7 p-0"  :src="defaultFlag ? require('@/assets/flagSvg/IRI.svg') : require('@/assets/flagSvg/USA.svg')"  alt="">
    </span>
    <div class="rounded absolute   w-24  h-20 bg-green mt-1 right-1 z-10">
        <div class="English flex justify-between p-1 ">
            <span>English</span>
            <img class="w-7" src="@/assets/flagSvg/USA.svg" alt="">
        </div>


        <div class="Persian flex justify-between p-1">
            <span>Persian</span>
            <img class="w-7" src="@/assets/flagSvg/IRI.svg" alt="">
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            defaultFlag : false,
    }
}}
</script>

<style scoped>
    .activeClass{
        background-color: red;
        color: aqua;
    }

    .errorClass{
        color: blueviolet;
        background-color: blue;
    }
</style>