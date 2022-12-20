<template>
  <div class="flex justify-between  flex-nowrap w-full ">
    <div class="flex flex-nowrap">
      <font-awesome-icon class="text-green transitionall iconhover text-base p-3 lightborder" :icon="['fab', 'facebook-f']" />
      <font-awesome-icon class="text-green transition-all iconhover text-base p-3 lightborder" :icon="['fab', 'instagram']" />
      <font-awesome-icon class="text-green transition-all iconhover text-base p-3 " :icon="['fab', 'twitter']" />
    </div>

    <div class="flex items-center ">
      <div class="lightborder mr-1  ">
        <switchlang></switchlang>
      </div>
      <div class="mr-2">
        <toggledark></toggledark>
      </div>
    </div>
  </div>
</template>

<script>
import switchlang from '@/components/HeadSection/switchLang.vue'
import toggledark from '@/components/HeadSection/ToggleDarkMode.vue'
export default {
  components:{
    toggledark,
    switchlang
  }
};
</script>

<style scoped>
 .lightborder{
  border-right: 1px solid #D9F9E8;;
 }

 .iconhover:hover{
  cursor: pointer;
  color: #4E548C;
 }
</style>