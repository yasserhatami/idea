<template>
  <div class=" mr-1 relative z-10">
    <span class="flag  rounded cursor-pointer">
      <img
        class="w-6 h-6 "
        :src="
          defaultLang
            ? require('@/assets/flagSvg/IRI.svg')
            : require('@/assets/flagSvg/USA.svg')
        "
        alt=""
      />
    </span>

    <div
      class="
      hide
        rounded
        absolute
        w-24
        bg-white
        dark:bg-darkblue
        right-1
        z-10
        w-28
        py-3
        px-2
        flex
        justify-center
        items-center
        shadow-2xl
      "
    >
     <div class="ali">
      <div 
        @click="switchToEnglish"
        class="English flex justify-between  cursor-pointer"
      >
        <span>English</span>
        <img class="w-6 ml-3" src="@/assets/flagSvg/USA.svg" alt="" />
      </div>


      <div
        @click="switchToPesrsian"
        class="Persian flex justify-between mt-3 cursor-pointer"
      >
        <span>Persian</span>
        <img class="w-6 ml-3" src="@/assets/flagSvg/IRI.svg" alt="" />
      </div>
     </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultLang: true,
    };
  },
  mounted() {
    if (localStorage.getItem("lang") === "en") {
      this.$i18n.locale = "en";
      this.defaultLang = false;
    } else {
      this.$i18n.locale = "fa";

      this.defaultLang = true;
    }
  },
  methods: {
    switchToEnglish() {
      this.$i18n.locale = "en";
      localStorage.setItem("lang", "en");

      this.defaultLang = false;
    },
    switchToPesrsian() {
      this.$i18n.locale = "fa";
      localStorage.setItem("lang", "fa");

      this.defaultLang = true;
    },
  },
};
</script>

<style scoped>
.hide{
    display: none;
    margin-top: 1;
}
.flag:hover + .hide {
  display: block;
}
.hide:hover{
    display: block;
}


</style>