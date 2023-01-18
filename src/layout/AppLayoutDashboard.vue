<template>
  <div>
    <div>
      <HeaderDasboard></HeaderDasboard>
    </div>
    
    <slot />
  </div>
</template>

<script>
import HeaderDasboard from "@/components/DashboardFolder/HeaderDashboard.vue";
export default {
  components: {
    HeaderDasboard,
  },
};
</script>

<style>
</style>