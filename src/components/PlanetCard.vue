<template>
    <div class="planet-card">
      <div class="card-header">
        <h2 class="planet-name">{{ planet.name || 'Planeta desconocido' }}</h2>
        <div class="planet-climate">{{ planet.climate || 'Clima desconocido' }}</div>
        <div class="planet-id" v-if="planet.uid">ID: {{ planet.uid }}</div>
      </div>
  
      <div class="details-grid">
        <div class="detail-item">
          <span class="detail-label">Población:</span>
          <span class="detail-value">{{ formattedPopulation }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Terreno:</span>
          <span class="detail-value">{{ planet.terrain || '?' }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Diámetro:</span>
          <span class="detail-value">{{ formattedDiameter }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Gravedad:</span>
          <span class="detail-value">{{ planet.gravity || '?' }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Período de rotación:</span>
          <span class="detail-value">{{ planet.rotation_period || '?' }} h</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Período orbital:</span>
          <span class="detail-value">{{ planet.orbital_period || '?' }} días</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Superficie acuática:</span>
          <span class="detail-value">{{ formattedWaterSurface }}</span>
        </div>
      </div>
  
      <div class="card-footer" v-if="planet.url">
        <a :href="planet.url" target="_blank" class="api-link">
          <span>Ver detalles completos</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
          </svg>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlanetCard',
    props: {
      planet: {
        type: Object,
        required: true,
        default: () => ({
          name: 'Planeta no disponible',
          climate: '?',
          terrain: '?'
        })
      }
    },
    computed: {
      formattedPopulation() {
        if (!this.planet.population || this.planet.population === 'unknown') return '?'
        const pop = parseFloat(this.planet.population.replace(/,/g, ''))
        return new Intl.NumberFormat('es-ES').format(pop) + ' habitantes'
      },
      formattedDiameter() {
        if (!this.planet.diameter || this.planet.diameter === 'unknown') return '?'
        return `${parseFloat(this.planet.diameter).toLocaleString('es-ES')} km`
      },
      formattedWaterSurface() {
        if (!this.planet.surface_water || this.planet.surface_water === 'unknown') return '?'
        return this.planet.surface_water + '%'
      }
    }
  }
  </script>
  
  <style scoped>
  .planet-card {
    background: linear-gradient(145deg, #1e1e1e, #2a2a2a);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #333;
    color: #f0f0f0;
    max-width: 100%;
    margin: 0 auto;
  }
  
  .planet-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(233, 210, 2, 0.2);
    border-color: #f5d000;
  }
  
  .card-header {
    margin-bottom: 1.5rem;
    position: relative;
  }
  
  .planet-name {
    color: #f5d000;
    margin: 0;
    font-size: clamp(1.3rem, 4vw, 1.5rem);
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #333;
    word-break: break-word;
  }
  
  .planet-climate {
    color: #aaa;
    font-size: clamp(0.9rem, 3vw, 1rem);
    margin-top: 0.3rem;
    font-style: italic;
  }
  
  .planet-id {
    position: absolute;
    top: 0;
    right: 0;
    background: #333;
    color: #aaa;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: clamp(0.7rem, 3vw, 0.8rem);
  }
  
  .details-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .detail-item {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  
  .detail-label {
    font-size: clamp(0.75rem, 3vw, 0.85rem);
    color: #aaa;
    margin-bottom: 0.2rem;
  }
  
  .detail-value {
    font-weight: 500;
    color: #f0f0f0;
    word-break: break-word;
  }
  
  .card-footer {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid #333;
  }
  
  .api-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #f5d000;
    text-decoration: none;
    font-size: clamp(0.8rem, 3vw, 0.9rem);
    transition: color 0.2s;
  }
  
  .api-link:hover {
    color: #f5d000;
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .planet-card {
      padding: 1rem;
      max-width: 400px;
    }
  
    .details-grid {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
  
    .planet-id {
      position: static;
      margin-top: 0.5rem;
      display: inline-block;
    }
  }
  </style>
  