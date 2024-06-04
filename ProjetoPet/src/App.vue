<template>
  <Navbar :logo="logo_src" :alt="app_name" :perfil="perfil_src"/>
</template> 

<script>
import Navbar from './components/Navbar.vue';

  export default{
    components: {
        Navbar
    },
    data(){
      return{
         logo_src: "/img/TechPaws1.png",
         perfil_src: "/img/perfil.svg",
         app_name: "TechPaws"
      }
    }
  }

</script>