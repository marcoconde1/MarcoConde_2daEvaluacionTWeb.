<template>
  <div class="about-view">
    <div class="content-wrapper">
      <div class="about-container">
        <h1 class="title">Acerca de este proyecto</h1>
        
        <div class="about-content">
          <div class="about-card">
            <div class="card-icon">🛸</div>
            <h2 class="card-title">Portal Star Wars</h2>
            <p class="card-description">
              Aplicación creada con Vue.js para la evaluación de Tecnologías Web I.
              Explora el universo de Star Wars con información detallada de planetas,
              naves estelares y personajes.
            </p>
          </div>
          
          <div class="about-details">
            <div class="detail-item">
              <span class="detail-label">Tecnologías:</span>
              <span class="detail-value">Vue 3, Vite, CSS3, SWAPI</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">Estilo:</span>
              <span class="detail-value">Tema Star Wars (verde/negro)</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">Características:</span>
              <span class="detail-value">Listado paginado, cards interactivas, modal de detalles</span>
            </div>
            
            <div class="detail-item">
              <span class="detail-label">API utilizada:</span>
              <span class="detail-value">
                <a href="https://www.swapi.tech/" target="_blank" class="api-link">SWAPI.tech</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-view {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #121212;
  padding: 2rem 1rem;
  font-family: 'Roboto', sans-serif;
  color: #e0e0e0;
}

.content-wrapper {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-container {
  width: 100%;
  max-width: 800px;
  background-color: #1e1e1e;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid #f5d000;
}

.title {
  color: #f5d000;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  padding-bottom: 0.5rem;
}



.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-card {
  background: linear-gradient(145deg, #1a1a1a, #252525);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.about-card:hover {
  border-color: #f5d000;
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(233, 210, 2, 0.2);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #f5d000;
}

.card-title {
  color: #f5d000;
  margin: 0 0 1rem 0;
  font-size: 1.8rem;
}

.card-description {
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 0;
}

.about-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.detail-item {
  background-color: #252525;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #f5d000;
}

.detail-label {
  color: #f5d000;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.detail-value {
  color: #e0e0e0;
  line-height: 1.5;
}

.api-link {
  color: #f5d000;
  text-decoration: none;
  transition: color 0.3s ease;
}

.api-link:hover {
  color: #f5d000;
  text-decoration: underline;
}


/* Responsive */
@media (max-width: 768px) {
  .about-container {
    padding: 1.5rem;
  }
  
  .title {
    font-size: 1.8rem;
  }
  
  .about-details {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .about-view {
    padding: 1rem;
  }
  
  .about-container {
    padding: 1.25rem;
  }
  
  .title {
    font-size: 1.6rem;
  }
  
  .card-icon {
    font-size: 2.5rem;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
}
</style>