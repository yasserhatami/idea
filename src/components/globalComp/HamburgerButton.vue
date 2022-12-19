<template>
  <div>
    <div class="container" @click="myFunction(this)">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        myFunction(){
            this.$el.querySelector('.container').classList.toggle("change");
        }
    }
};
</script>

<style scoped>
.container{
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 20px;
  height: 3px;
  background-color: rgb(95, 90, 90);
  margin: 3px 0;
  transition: 0.4s;
}

.change .bar1 {
  transform: translate(0, 4px) rotate(-55deg);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  transform: translate(0, -8px) rotate(55deg);
}
</style>