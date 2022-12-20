<template>
  <div class=" mr-1 relative z-0">
    <span class="flag  rounded cursor-pointer">
      <img
        class="w-7 h-7 "
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
        h-20
        bg-green
        dark:bg-darkblue
        right-1
        z-10
        
      "
    >
      <div
        @click="switchToEnglish"
        class="English flex justify-between p-1 cursor-pointer"
      >
        <span>English</span>
        <img class="w-7" src="@/assets/flagSvg/USA.svg" alt="" />
      </div>

      <div
        @click="switchToPesrsian"
        class="Persian flex justify-between pt-2 p-1 cursor-pointer"
      >
        <span>Persian</span>
        <img class="w-7" src="@/assets/flagSvg/IRI.svg" alt="" />
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