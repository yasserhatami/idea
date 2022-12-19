<template>
  <div class="flex justify- w-full items-center">
    <div>
      <font-awesome-icon class="text-green transitionall iconhover text-base p-3 lightborder" :icon="['fab', 'facebook-f']" />
      <font-awesome-icon class="text-green transition-all iconhover text-base p-3 lightborder" :icon="['fab', 'instagram']" />
      <font-awesome-icon class="text-green transition-all iconhover text-base p-3 " :icon="['fab', 'twitter']" />
    </div>

    <div class="flex">
      <div class="lightborder mr-4 p-2">
        <toggledark></toggledark>
      </div>
      <div>
        ali
      </div>
    </div>
  </div>
</template>

<script>
import toggledark from '@/components/HeadSection/ToggleDarkMode.vue'
export default {
  components:{
    toggledark
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