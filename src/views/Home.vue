<template>
  <div class="mt-44 ali container">
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
    </div>
    <hr />
    
  </div>
</template>

<script>
export default {
  name: "HomeComp",
  components: {},
};
</script>

<style scoped>
.ali {
  margin-bottom: 1500px;
}



.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  width: 35px;
  height: 18px;
  background-color: #111;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
}

.ball {
  width: 15px;
  height: 14px;
  background-color: white;
  position: absolute;
  top: 1.5px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

/*  target the elemenent after the label*/
.checkbox:checked + .label .ball {
  transform: translateX(17px);
}

.fa-moon {
  font-size: smaller;
  color: rgb(184, 182, 182);
}

.fa-sun {
  
  margin-left: 5px;
  font-size: smaller;
  color: yellow;
}
</style>