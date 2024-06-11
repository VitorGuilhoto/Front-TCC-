<template>
  <footer class="footer">
    <div class="main-container">
      <p>&copy; TechPaws. Todos os direitos reservados.</p>
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href="#privacidade">Política de Privacidade</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: gray;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #e7e7e7;
}
.footer .container {
  max-width: 1200px;
  margin: 0 auto;
}
.footer p {
  margin: 0;
  color: black;
}
.footer nav ul {
  list-style: none;
  padding: 0;
}
.footer nav ul li {
  display: inline;
  margin: 0 10px;
}
.footer nav ul li a {
  color: red ;
  text-decoration: none;
}
.footer nav ul li a:hover {
  text-decoration: underline;
}
</style>