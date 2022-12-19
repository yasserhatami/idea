<template>
<a href="#" class="btn black ">Subscribe</a>
</template>

<script>
export default {
  
};
</script>

<style scoped>
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
}



.btn {
  border-radius: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background-size: 200%;
  transition: all 0.4s;
  background-position: 0%;
}

.black {
  color: rgb(255, 255, 255);
    background-image: linear-gradient(-270deg, #00D664 50%, #1E266D 50%);
}


.btn:hover {
  background-position: -100%;
}

</style>