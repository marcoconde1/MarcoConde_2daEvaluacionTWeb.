<template>
    <div class="planets-list">
      <div class="content-wrapper">
        <h1 class="title">Planetas del Universo Star Wars</h1>
  
        <div v-if="loading" class="loading-container">
          <div class="loading">Cargando planetas...</div>
        </div>
  
        <div v-else-if="error" class="error-container">
          <div class="error-message">
            {{ error }}
            <button @click="fetchPlanets(currentPage)" class="retry-button">Reintentar</button>
          </div>
        </div>
  
        <div v-else class="main-content">
          <div v-if="planets.length === 0" class="no-results">
            No se encontraron planetas
          </div>
  
          <div v-else class="cards-grid">
            <PlanetCard 
              v-for="planet in planets" 
              :key="planet.uid" 
              :planet="planet" 
            />
          </div>
  
          <div class="pagination-container">
            <div class="pagination">
              <button class="nav-button" @click="goToPage(currentPage - 1)" :disabled="!pagination.previous">Anterior</button>
              <span class="page-info">Página {{ currentPage }} de {{ pagination.total_pages }}</span>
              <button class="nav-button" @click="goToPage(currentPage + 1)" :disabled="!pagination.next">Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PlanetCard from '../components/PlanetCard.vue'
  
  export default {
    name: 'PlanetsList',
    components: {
      PlanetCard
    },
    data() {
      return {
        planets: [],
        loading: false,
        error: null,
        currentPage: 1,
        pagination: {
          next: null,
          previous: null,
          total_pages: 1
        }
      }
    },
    created() {
      this.fetchPlanets()
    },
    methods: {
      async fetchPlanets(page = 1) {
        this.loading = true
        this.error = null
        try {
          const response = await fetch(`https://www.swapi.tech/api/planets?page=${page}&limit=9`)
          if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
  
          const listData = await response.json()
          this.pagination = {
            next: listData.next,
            previous: listData.previous,
            total_pages: listData.total_pages || 1
          }
          this.currentPage = page
  
          const planetsWithDetails = await Promise.all(
            listData.results.map(async planet => {
              try {
                const planetResponse = await fetch(planet.url)
                if (!planetResponse.ok) throw new Error('Error al cargar detalles')
                const planetData = await planetResponse.json()
                return {
                  ...planet,
                  ...planetData.result.properties,
                  uid: planet.uid
                }
              } catch (err) {
                console.error(`Error cargando ${planet.name}:`, err)
                return { ...planet, error: true }
              }
            })
          )
          this.planets = planetsWithDetails.filter(p => !p.error)
  
        } catch (err) {
          this.error = `Error al cargar los planetas: ${err.message}`
        } finally {
          this.loading = false
        }
      },
      goToPage(page) {
        if (page >= 1 && page <= this.pagination.total_pages) {
          this.fetchPlanets(page)
        }
      }
    }
  }
  </script>
  
  <style scoped>
  
  .planets-list {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: #121212;
    padding: 2rem 1rem;
    font-family: 'Roboto', sans-serif;
  }
  
  .content-wrapper {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .title {
    color: #f5d000;
    text-align: center;
    margin-bottom: 2.5rem;
    font-size: 2.5rem;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
  }
  
  .loading-container,
  .error-container {
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .loading {
    color: #f5d000;
    font-size: 1.2rem;
    text-align: center;
  }
  
  .error-message {
    color: #ff6b6b;
    background-color: #2a2a2a;
    padding: 1.5rem 2rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
    text-align: center;
  }
  
  .retry-button {
    padding: 0.75rem 1.5rem;
    background-color: #f5d000;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .retry-button:hover {
    background-color: #f5d000;
    transform: scale(1.05);
  }
  
  /* Grid de tarjetas - Versión Desktop */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 4rem;
    width: 100%;
    margin-bottom: 4rem;
    padding: 0 1rem;
    transition: all 0.3s ease;
  }
  
  /* Tablet (1024px) */
  @media (max-width: 1024px) {
    .cards-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 4rem;
    }
  }
  
  /* Móvil (768px) - Cards centradas */
  @media (max-width: 768px) {
    .cards-grid {
      grid-template-columns: repeat(2, minmax(200px, 1fr));
      justify-items: center;
      gap: 4rem;
      padding: 0 1rem;
    }
  
    .starship-card {
      width: 100%;
      max-width: 320px;
    }
  }
  
  /* Móvil pequeño (480px) */
  @media (max-width: 480px) {
    .title {
      font-size: 2rem;
    }
  
    .cards-grid {
      grid-template-columns: 1fr;
      gap: 4rem;
      padding: 0 0rem;
    }
  
    .starship-card {
      max-width: 280px;
    }
  }
  
  /* Paginación */
  .pagination-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 4rem 0;
  }
  
  .pagination {
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #1e1e1e;
    padding: 1.5rem 3rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  
  .page-info {
    color: #f5d000;
    font-weight: bold;
    min-width: 140px;
    text-align: center;
    margin: 0 2rem;
    font-size: 1.1rem;
  }
  
  .nav-button {
    padding: 1rem 2rem;
    background-color: #333;
    color: #f5d000;
    border: 2px solid #f5d000;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .nav-button:hover:not(:disabled) {
    background-color: #f5d000;
    color: #fff;
    transform: scale(1.05);
  }
  
  .nav-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border-color: #666;
  }
  
  /* Paginación en móviles */
  @media (max-width: 768px) {
    .pagination {
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem 2rem;
    }
  
    .page-info {
      order: 2;
      margin: 1rem 0;
    }
  }
  </style>
  