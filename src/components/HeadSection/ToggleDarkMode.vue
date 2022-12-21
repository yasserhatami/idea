<template>
  <div>
    <input
      @click="change"
      type="checkbox"
      v-model="message"
      class="checkbox cursor-pointer"
      id="checkbox"
    />
    <label for="checkbox" class="label">
      <font-awesome-icon :icon="['fas', 'sun']" />
      <font-awesome-icon :icon="['fas', 'moon']" />
      <div class="ball"></div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  beforeCreate() {
    let theme = localStorage.getItem("theme");
    console.log("salam", theme);
    if (theme === 'light') {
      document.documentElement.classList.remove("dark");
      this.message=true
    } else {
      document.documentElement.classList.add("dark");
      this.message=false
    }
  },
  methods: {
    change() {
      console.log(this.message);
      if (this.message === true) {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        console.log('dark');
      } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        
        console.log('light');
      }
    },
  },
};
</script>

<style scoped>
.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  cursor: pointer;
  width: 30px;
  height: 15px;
  background-color: #2c3333;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transform: scale(1.5);
}

.ball {
  width: 15px;
  height: 13px;
  background-color: white;
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

/*  target the elemenent after the label*/
.checkbox:checked + .label .ball {
  transform: translateX(13px);
}

.fa-moon {
  padding: 2px;

  font-size: 12px;
  color: #00d664;
}

.fa-sun {
  font-size: 12px;
  color: #00d664;
  padding-left: 1px;
}
</style>