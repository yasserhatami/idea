<template>
  <div class="mt-28">
    <div class="grid grid-cols-6 gap-4 mt-28 px-2">
      <div class="col-span-2 md:col-span-1 bg-sky">{{a}}</div>

      <div class="col-span-4 md:col-span-5 bg-white">data</div>
    </div>
  </div>
</template>

<script>
// import store from "@/store/index"
export default {
  // mounted() {
  //   console.log('kkkkkkkkkkkkkkkkkkkkkkkkk');
  //   this.a = store.dispatch("user/x");
  // },
  data(){
    return{
    a : ''
    }
  }
};
</script>

<style>
</style>