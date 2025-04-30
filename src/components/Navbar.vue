<template>
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">Star Wars Portal</router-link>
        
        <!-- Menú para desktop -->
        <div class="nav-links">
          <router-link to="/people" class="nav-button">Personajes</router-link>
          <router-link to="/starship" class="nav-button">Naves</router-link>
          <router-link to="/planet" class="nav-button">Planetas</router-link>
          <router-link to="/about" class="nav-button">Acerca de</router-link>
        </div>
        
        <!-- Botón hamburguesa para móvil -->
        <button class="hamburger" @click="toggleMenu" aria-label="Menú">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
      
      <!-- Menú móvil -->
      <div class="mobile-menu" :class="{ 'active': isMenuOpen }">
        <router-link to="/people" class="mobile-nav-button" @click="closeMenu">Personajes</router-link>
        <router-link to="/starships" class="mobile-nav-button" @click="closeMenu">Naves</router-link>
        <router-link to="/planet" class="mobile-nav-button" @click="closeMenu">Planetas</router-link>
        <router-link to="/about" class="mobile-nav-button" @click="closeMenu">Acerca de</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        isMenuOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
      },
      closeMenu() {
        this.isMenuOpen = false
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #000;
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-weight: bold;
    font-size: clamp(1.2rem, 4vw, 1.5rem);
    color: #ffe81f;
    text-decoration: none;
    font-family: 'Star Jedi', Arial, sans-serif;
    letter-spacing: 1px;
    z-index: 1001;
  }
  
  .nav-links {
    display: none; /* Oculto en móvil por defecto */
    gap: 1rem;
  }
  
  .nav-button {
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #ffe81f;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: all 0.3s ease;
    border: 1px solid #ffe81f;
    font-size: 0.9rem;
    white-space: nowrap;
  }
  
  .nav-button:hover {
    background-color: #ffe81f;
    color: #000;
  }
  
  .router-link-exact-active.nav-button {
    background-color: #ffe81f;
    color: #000;
    border-color: #000;
  }
  
  /* Estilos del menú hamburguesa */
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
  }
  
  .hamburger-line {
    width: 100%;
    height: 3px;
    background: #ffe81f;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  
  /* Menú móvil */
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    padding-top: 5rem;
  }
  
  .mobile-menu.active {
    transform: translateY(0);
  }
  
  .mobile-nav-button {
    color: #ffe81f;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    border-bottom: 2px solid transparent;
  }
  
  .mobile-nav-button:hover,
  .mobile-nav-button.router-link-exact-active {
    color: #000;
    background-color: #ffe81f;
    border-radius: 4px;
  }
  
  /* Fuente Star Wars */
  @font-face {
    font-family: 'Star Jedi';
    src: url('https://fonts.cdnfonts.com/css/star-jedi') format('woff2');
  }
  
  /* Media queries para desktop */
  @media (min-width: 768px) {
    .hamburger {
      display: none;
    }
    
    .nav-links {
      display: flex;
    }
    
    .mobile-menu {
      display: none;
    }
    
    .nav-button {
      font-size: 1rem;
      padding: 0.5rem 1.25rem;
    }
  }
  
  @media (min-width: 992px) {
    .nav-links {
      gap: 1.5rem;
    }
    
    .nav-button {
      padding: 0.5rem 1.5rem;
    }
  }
  </style>