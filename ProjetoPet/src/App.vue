<template>
  <Navbar :logo="logo_src" :alt="app_name" :perfil="perfil_src" :menu="menu_src"/>
  <Home />
  <Footer />
</template> 

<script>
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';

  export default{
    components: {
        Navbar,
        Home,
        Footer
    },
    data(){
      return{
         logo_src: "/img/TechPaws1.png",
         perfil_src: "/img/perfil.svg",
         menu_src: "/img/menu.svg",
         app_name: "TechPaws"
      }
    }
  }

</script>

<style>
*{
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
 .main-container{
  margin: 50px;
  min-height: 250px ;
 }

 h1{
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color:black;
 }
</style>
