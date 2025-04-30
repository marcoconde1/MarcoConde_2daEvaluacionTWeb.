<template>
  <div class="person-card">
    <div class="card-header">
      <h2 class="character-name">{{ person.name || 'Nombre desconocido' }}</h2>
      <div class="character-id" v-if="person.uid">ID: {{ person.uid }}</div>
    </div>
    
    <div class="details-grid">
      <div class="detail-item">
        <span class="detail-label">Altura:</span>
        <span class="detail-value">{{ person.height || '?' }} cm</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Peso:</span>
        <span class="detail-value">{{ person.mass || '?' }} kg</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Género:</span>
        <span class="detail-value" :class="'gender-' + (person.gender ? person.gender.toLowerCase() : 'unknown')">
          {{ translatedGender }}
        </span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Color de piel:</span>
        <span class="detail-value">{{ person.skin_color || '?' }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Color de pelo:</span>
        <span class="detail-value">{{ person.hair_color || '?' }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Color de ojos:</span>
        <span class="detail-value">{{ person.eye_color || '?' }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Año nacimiento:</span>
        <span class="detail-value">{{ person.birth_year || '?' }}</span>
      </div>
    </div>
    
    <div class="card-footer" v-if="person.url">
      <a :href="person.url" target="_blank" class="api-link">
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
  name: 'PersonCard',
  props: {
    person: {
      type: Object,
      required: true,
      default: () => ({ 
        name: 'Personaje no disponible',
        height: '?',
        mass: '?',
        gender: 'unknown'
      })
    }
  },
  computed: {
    translatedGender() {
      const gender = this.person.gender ? this.person.gender.toLowerCase() : 'unknown'
      const translations = {
        male: 'Masculino',
        female: 'Femenino',
        'n/a': 'No aplica',
        none: 'Ninguno',
        unknown: 'Desconocido'
      }
      return translations[gender] || gender
    }
  }
}
</script>

<style scoped>
.person-card {
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
  max-width: 100%; /* Asegura que no sobresalga en móviles */
  margin: 0 auto; /* Centrado en contenedores pequeños */
}

.person-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(233, 210, 2, 0.2);
  border-color: #f5d000;
}

.card-header {
  margin-bottom: 1.5rem;
  position: relative;
}

.character-name {
  color: #f5d000;
  margin: 0;
  font-size: clamp(1.3rem, 4vw, 1.5rem); /* Tamaño responsive */
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #333;
  word-break: break-word; /* Evita desbordamiento */
}

.character-id {
  position: absolute;
  top: 0;
  right: 0;
  background: #333;
  color: #aaa;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: clamp(0.7rem, 3vw, 0.8rem); /* Tamaño responsive */
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
  min-width: 0; /* Previene desbordamiento */
}

.detail-label {
  font-size: clamp(0.75rem, 3vw, 0.85rem); /* Tamaño responsive */
  color: #aaa;
  margin-bottom: 0.2rem;
}

.detail-value {
  font-weight: 500;
  color: #f0f0f0;
  word-break: break-word; /* Asegura que el texto largo no desborde */
}

/* Colores de género (se mantienen igual) */
.gender-male { color: #4fc3f7; }
.gender-female { color: #f06292; }
.gender-none,
.gender-unknown,
.gender-n\/a { color: #a5d6a7; }

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
  font-size: clamp(0.8rem, 3vw, 0.9rem); /* Tamaño responsive */
  transition: color 0.2s;
}

.api-link:hover {
  color: #f5d000;
  text-decoration: underline;
}

/* Media Queries mejoradas */
@media (max-width: 992px) {
  .person-card {
    padding: 1.25rem;
  }
  
  .details-grid {
    gap: 0.8rem;
  }
}

@media (max-width: 768px) {
  .person-card {
    padding: 1rem;
    max-width: 400px; /* Ancho máximo para móviles */
  }
  
  .details-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .character-id {
    position: static;
    margin-top: 0.5rem;
    display: inline-block;
  }
}

@media (max-width: 480px) {
  .person-card {
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