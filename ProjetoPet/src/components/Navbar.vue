<template>
  <div id="nav">
      <div>
        <router-link to="/">
            <img class="icone_logo" :src="logo" :alt="alt" id="logo">
        </router-link>
      </div>
      <div>
          <input class="busca" type="text" placeholder="Buscar"></input>
      </div>
      <div>
          <router-link to="/">
              <img class="icone_user" :src="perfil" id="perfil">
          </router-link>

      </div>
  </div>
</template>

<script>
    export default{
        name: "Navbar",
        props: ["logo","alt","perfil"]
    }
</script>

<style>
#nav {
    display: grid;
    grid-template-columns: 20% 60% 20%;
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
