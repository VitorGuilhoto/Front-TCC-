<template>
  <Navbar :logo="logo_src" :alt="app_name" />
</template> 
  
  <script>
  import Navbar from './components/Navbar.vue';

    export default{
      name: "ListaPessoas",
      components: {
          Navbar
      }
    }
  
  </script>