<template>
  <div class="mt-28">
    <div class="grid grid-cols-6 gap-4 mt-28 px-2">
      <div class="col-span-2 md:col-span-1 bg-sky">
        <span class="mb-4">menu</span>

        <ul>
          <li v-for="menu in allUsers" :key="menu.id">
            <!-- start  -->
            <a href="">{{ menu.menuLinkTitle }}</a>
          </li>
        </ul>
      </div>

      <div class="col-span-4 md:col-span-5 bg-white">data</div>
    </div>
  </div>
</template>

<script>
import setting from "@/services/setting.js"
export default {
  data(){
    return{
      allUsers : [],
      role : [],
      user : {}
    }
  },
  methods:{
    become(){
      setting.getSidebarMenuItems().then((res)=>{
        this.allUsers = res.result;
      })
    }
  },
  beforeMount(){
   this.user = this.$store.state.auth.user;
   this.role = this.user.roles;
  //  this.become()
   console.log('ali');
  },
  mounted(){
    // if(this.role.includes('Admin')){
      this.become()
    // }
  }
};
</script>

<style>
</style>