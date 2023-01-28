<template>
  <div class="bg-footerBG w-full">
    <div class="container mx-auto">
      <div class="flex justify-between items-center py-5 border-b">
        <div>
          <ul class="flex justify-center items-center">
            <li class="mr-5">Aboat</li>
            <li class="mr-5">Servises</li>
          </ul>
        </div>

        <div class="flex flex-nowrap">
          <font-awesome-icon
            class="
              text-green
              transitionall
              iconhover
              text-base
              p-3
              lightborder
              leftborder
            "
            :icon="['fab', 'facebook-f']"
          />
          <font-awesome-icon
            class="
              text-green
              transition-all
              iconhover
              text-base
              p-3
              lightborder
            "
            :icon="['fab', 'instagram']"
          />
          <font-awesome-icon
            class="
              text-green
              transition-all
              iconhover
              text-base
              p-3
              lightborder
            "
            :icon="['fab', 'twitter']"
          />
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4 py-7">
        <ul>
          <h3 class="text-xl w-20 text-center">Aboat</h3>
          <li class="my-5 link">one</li>
          <li class="my-5 link">two</li>
          <li class="my-5 link">three</li>
        </ul>

        <ul>
          <h3 class="text-xl ">Falow us</h3>
          <li class="my-5 link">one</li>
          <li class="my-5 link">two</li>
          <li class="my-5 link">three</li>
        </ul>

        <ul>
          <h3 class="text-xl">Contact</h3>
          <p class="w-1/2 pt-3">New York. 112 W 34th St, Manhattan (1) 212-445-4320</p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.iconhover:hover {
  cursor: pointer;
  color: #4e548c;
}
.link{
  text-align: center;
  padding: 5px;
  max-width: 5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.link:hover{
  
  border-bottom: 1px solid #00D664;
}
</style>