<template>
  <h2>Login</h2>

  <form @submit.prevent="login">
    <input type="text" placeholder="Seu email">
    <input type="password" placeholder="Seu senha">
    <button type="submit">Login</buton>
  </form>
</template>

<script setup>

function login(){
  console.og('login');
}

</script>

<style lang="scss" scoped>

</style>
