<template>
  <div class="mt-44 ali container ">
    <h1 class="dark:text-green">This is a home page</h1>

    {{ $t("message") }}

    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div><hr>
  </div>
</template>

<script>

export default {
  name: "HomeComp",
  components: {
    
  }
};
</script>

<style scoped>
.ali {
  margin-bottom: 1500px;
}
</style>