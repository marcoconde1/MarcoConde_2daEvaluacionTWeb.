<template>
    <footer class="footer">
      <div class="container">
        <p>© 2025 Star Wars Portal - Evaluación de Tecnologías Web I</p>
        <p>Datos proporcionados por <a href="https://swapi.tech/" target="_blank" rel="noopener">SWAPI</a></p>
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
    background-color: #000;
    color: #fff;
    padding: 1.5rem 0;
    margin-top: auto;
  }
  
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .footer p {
    margin: 0.5rem 0;
  }
  
  .footer a {
    color: #ffe81f;
    text-decoration: none;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  </style>