<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <slot/>
  </div>
</template>

<script>
import Header from "@/components/HeadSection/Header.vue"
export default {
 components:{
  Header
 }
}
</script>

<style scoped>
</style>