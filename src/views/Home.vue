<template>
  <div class="mt-44 ali container">
    <button @click="xxx">click</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeComp",
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },
  components: {},
  methods: {
    xxx() {
      axios.get(
        `https://www.lotfirahim.ir/api/Administration/GetRolesNotAssignedToUser/${"sinuhe_1368"}`,
        {
          headers: {
            accept: "text/plain",
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
          },
        }
      ).the(res =>{console.log(res);});
    },
  },
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