<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <slot/>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/HeadSection/Header.vue"
import Footer from "@/components/FooterComp.vue"
export default {
 components:{
  Header,
  Footer
 }
}
</script>

<style scoped>
 
</style>