<template>
    <div class="starship-card">
      <div class="card-header">
        <h2 class="starship-name">{{ starship.name || 'Nave desconocida' }}</h2>
        <div class="starship-class">{{ starship.starship_class || 'Clase desconocida' }}</div>
        <div class="starship-id" v-if="starship.uid">ID: {{ starship.uid }}</div>
      </div>
      
      <div class="details-grid">
        <div class="detail-item">
          <span class="detail-label">Modelo:</span>
          <span class="detail-value">{{ starship.model || '?' }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Fabricante:</span>
          <span class="detail-value">{{ starship.manufacturer || '?' }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Longitud:</span>
          <span class="detail-value">{{ starship.length || '?' }} m</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Costo:</span>
          <span class="detail-value">{{ formattedCost }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Tripulación:</span>
          <span class="detail-value">{{ starship.crew || '?' }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Pasajeros:</span>
          <span class="detail-value">{{ translatedPassengers }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Capacidad de carga:</span>
          <span class="detail-value">{{ formattedCargo }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Consumibles:</span>
          <span class="detail-value">{{ starship.consumables || '?' }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Hiperimpulsor:</span>
          <span class="detail-value">{{ starship.hyperdrive_rating || '?' }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">MGLT:</span>
          <span class="detail-value">{{ starship.MGLT || '?' }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Velocidad máxima:</span>
          <span class="detail-value">{{ starship.max_atmosphering_speed || '?' }} km/h</span>
        </div>
      </div>
      
      <div class="card-footer" v-if="starship.url">
        <a :href="starship.url" target="_blank" class="api-link">
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
    name: 'StarshipCard',
    props: {
      starship: {
        type: Object,
        required: true,
        default: () => ({ 
          name: 'Nave no disponible',
          model: '?',
          manufacturer: '?',
          starship_class: '?'
        })
      }
    },
    computed: {
      formattedCost() {
        if (!this.starship.cost_in_credits || this.starship.cost_in_credits === 'unknown') return '?'
        const cost = parseFloat(this.starship.cost_in_credits.replace(/,/g, ''))
        return new Intl.NumberFormat('es-ES').format(cost) + ' créditos'
      },
      formattedCargo() {
        if (!this.starship.cargo_capacity || this.starship.cargo_capacity === 'unknown') return '?'
        const cargo = parseFloat(this.starship.cargo_capacity.replace(/,/g, ''))
        return new Intl.NumberFormat('es-ES').format(cargo) + ' kg'
      },
      translatedPassengers() {
        const passengers = this.starship.passengers ? this.starship.passengers.toLowerCase() : 'unknown'
        if (passengers === 'n/a' || passengers === 'none') return 'Ninguno'
        if (passengers === 'unknown') return '?'
        return passengers
      }
    }
  }
  </script>
  
  <style scoped>
  .starship-card {
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
  
  .starship-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(233, 210, 2, 0.2);
    border-color: #f5d000;
  }
  
  .card-header {
    margin-bottom: 1.5rem;
    position: relative;
  }
  
  .starship-name {
    color: #f5d000;
    margin: 0;
    font-size: clamp(1.3rem, 4vw, 1.5rem);
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #333;
    word-break: break-word;
  }
  
  .starship-class {
    color: #aaa;
    font-size: clamp(0.9rem, 3vw, 1rem);
    margin-top: 0.3rem;
    font-style: italic;
  }
  
  .starship-id {
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
    color: #00b4ff;
    text-decoration: underline;
  }
  
  /* Media Queries */
  @media (max-width: 992px) {
    .starship-card {
      padding: 1.25rem;
    }
    
    .details-grid {
      gap: 0.8rem;
    }
  }
  
  @media (max-width: 768px) {
    .starship-card {
      padding: 1rem;
      max-width: 400px;
    }
    
    .details-grid {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
    
    .starship-id {
      position: static;
      margin-top: 0.5rem;
      display: inline-block;
    }
  }
  
  @media (max-width: 480px) {
    .starship-card {
      padding: 0.8rem;
    }
    
    .card-header {
      margin-bottom: 1rem;
    }
    
    .api-link svg {
      width: 14px;
      height: 14px;
    }
  }
  </style>