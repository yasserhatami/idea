<template>
  <div class="p-0 m-0">
    <nav class="bg-white dark:bg-darknav fixed w-full z-20 top-0 left-0 dark:border-gray-600">
      <div class="mx-auto lg:container z-10 h-10 px-0 md-px-0">
        <toppage></toppage>
      </div>
      <hr class="bbb" />

      <div
        class="mx-auto lg:container px-2 md-px-0 flex flex-wrap items-center justify-between mx-auto"
      >
        <router-link class="brand text-2xl text-black dark:text-silver font-bold" to="/">idea...</router-link>

        <div class="hidden lg:block lg:order-2 w-44 z-0">
          <subscribe></subscribe>
        </div>

        <div class="flex lg:hidden">
          <hamIccon @click="open = !open"></hamIccon>
        </div>

        <div
          :class="open ? 'h-60' : 'h-0'"
          class="lg:h-16 items-center justify-between overflow-hidden w-full lg:flex lg:w-auto lg:order-1 transition-all ease-in-out duration-300"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col pt-3 mt-1 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0"
          >
            <li>
              <a
                href="#"
                class="block py-2 pl-0 pr-4 text-darkblue bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-silver"
                aria-current="page"
              >Home</a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-0 pr-4 text-darkblue rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-silver"
              >About</a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-0 pr-4 text-darkblue rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:text-silver"
              >Services</a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-0 pr-4 text-darkblue rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:text-silver"
              >Contact</a>
            </li>
            <li class="lg:hidden">
              <subscribe></subscribe>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import hamIccon from "../globalComp/HamburgerButton.vue";
import subscribe from "../globalComp/SubscibeButton.vue";

import toppage from "./TopPage.vue";
export default {
  name: "NavbarComp",
  components: {
    hamIccon,
    subscribe,
    toppage
  },
  data() {
    return {
      open: false
    };
  }
};
</script>

<style scoped>
.bbb {
  color: #d9f9e8;
}

</style>