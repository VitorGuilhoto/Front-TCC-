<template>
  <div id="nav">
      <div>
        <router-link to="/">
            <img class="icone_logo" :src="logo" :alt="alt" id="logo">
        </router-link>
      </div>
      <div>
        <router-link to="/">
          home
        </router-link>

      </div>
      <div>
        <router-link to="/">
          quem somos
        </router-link>
      </div>
      <div>
        <router-link to="/">
          adoções
        </router-link>
      </div>
      <div>
        <router-link to="/">
          doações
        </router-link>
      </div>
      <div>
        <router-link to="/">
          voluntariado
        </router-link>
      </div>
      <div>
          <router-link to="/">
              <img class="icone_user" :src="perfil" id="perfil">
          </router-link>

      </div>
      <div>
          <router-link to="/">
              <img class="icone_user" :src="menu" id="menu">
          </router-link>

      </div>
  </div>
</template>

<script>
    export default{
        name: "Navbar",
        props: ["logo","alt","perfil","menu"]
    }
</script>

<style>
#nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    background-color: gray;
    text-align: center;
    align-items: center;
    font-size: large;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    
    ::placeholder{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }
  
  }

  input{
    width: 800px;
    height: 20px;
    border-radius: 5px;
  }

  .icone_logo{
    width: 150px;
  }

  .icone_user{
    width: 60px;
    padding: 20px;
  }

  .busca{
    width: 300px;
    border-radius: 10px;
  }

  
</style>
