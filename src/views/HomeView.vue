<template>
    <div class="star-wars-landing">
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="title-container">
        <h1 class="main-title">STAR WARS PORTAL</h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
    mounted() {
      this.createStars();
    },
    methods: {
      createStars() {
        const starsContainer = document.querySelector('.stars');
        const count = 200;
        
        for (let i = 0; i < count; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          
          // Posición aleatoria
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          
          // Tamaño aleatorio entre 1px y 3px
          const size = Math.random() * 2 + 1;
          
          // Duración de animación aleatoria entre 50s y 200s
          const duration = Math.random() * 150 + 50;
          
          star.style.left = `${x}%`;
          star.style.top = `${y}%`;
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          star.style.animationDuration = `${duration}s`;
          
          starsContainer.appendChild(star);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .star-wars-landing {
    height: 100vh;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: #FFE81F;
  }
  
  .stars, .twinkling {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  
  .stars {
    background: transparent;
    z-index: 0;
  }
  
  .star {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    animation: twinkle linear infinite;
  }
  
  @keyframes twinkle {
    0% { opacity: 0.1; }
    50% { opacity: 1; }
    100% { opacity: 0.1; }
  }
  
  .twinkling {
    background: transparent url('https://www.transparenttextures.com/patterns/stardust.png') repeat;
    z-index: 1;
    opacity: 0.2;
  }
  
  .title-container {
    text-align: center;
    z-index: 2;
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .main-title {
    font-size: clamp(3rem, 15vw, 8rem);
    font-weight: bold;
    color: #FFE81F;
    text-shadow: 0 0 10px #FFE81F, 0 0 20px #FFE81F, 0 0 30px #FFE81F;
    font-family: 'Pathway Gothic One', sans-serif;
    letter-spacing: clamp(0.5rem, 3vw, 1.5rem);
    margin-bottom: 1rem;
    text-transform: uppercase;
    animation: titleGlow 3s ease-in-out infinite alternate;
  }
  
 
  
  @keyframes titleGlow {
    0%, 100% {
      text-shadow: 0 0 10px #FFE81F, 0 0 20px #FFE81F, 0 0 30px #FFE81F;
      transform: scale(1);
    }
    50% {
      text-shadow: 0 0 15px #FFE81F, 0 0 30px #FFE81F, 0 0 45px #FFE81F;
      transform: scale(1.05);
    }
  }
  

  
  /* Media queries para ajustes específicos */
  @media (max-width: 768px) {
    .main-title {
      letter-spacing: 0.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .main-title {
      font-size: 2.5rem;
      letter-spacing: 0.3rem;
    }
  
  }
  </style>