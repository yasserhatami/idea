<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center mx-5">
      <button class="dark:bg-sky shadow-lg border rounded mt-5 p-1 bg-silver transition ease-in-out   hover:-translate-y-1 hover:scale-110  duration-300">
        <router-link to="/">back to home</router-link>
      </button>
      <div class="dark:bg-sky flex justify-between items-center  py-1 px-2 bg-silver rounded mt-5 ">
        <switchlang ></switchlang>
        <toggledark class="ml-4"></toggledark>
      </div>
    </div>
    <slot />
  </div>
</template>
  
  <script>
import switchlang from "@/components/HeadSection/switchLang.vue";
import toggledark from "@/components/HeadSection/ToggleDarkMode.vue";
export default {
  components: {
    switchlang,
    toggledark,
  },
};
</script>
  
  <style scoped>
  
</style>