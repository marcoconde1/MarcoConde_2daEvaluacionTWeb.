# 🌌 Star Wars Portal

**Portal web desarrollado con Vue.js** para la evaluación de **Tecnologías Web I**, que consume la API [SWAPI](https://swapi.tech/) para mostrar información sobre **planetas**, **personajes** y **naves estelares** del universo *Star Wars*.

## ✨ Características

- ✅ Listado de planetas, personajes y naves estelares  
- 💻 Diseño responsive con CSS  
- 🔢 Paginación para navegar entre resultados  
- 🔍 Detalles completos en modales interactivos  
- 🧩 Barra de navegación y footer reutilizables  

## 🛠️ Tecnologías utilizadas

- ⚙️ [Vue.js 3 (Composition API)](https://vuejs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🌐 Fetch API
- 🔀 [Vue Router](https://router.vuejs.org/)
- 🎨 CSS puro

## 🚀 Instalación

Clona el repositorio:

```bash
git clone https://github.com/[usuario]/StarWarsPortal.git
cd StarWarsPortal
```

Instala las dependencias:

```bash
npm install
```

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

## 📁 Estructura del proyecto + Endpoints de la API + Información mostrada + Diseño

```plaintext
src/
├── components/
│   ├── PlanetCard.vue
│   ├── PersonCard.vue
│   ├── StarshipCard.vue
│   ├── Navbar.vue
│   └── Footer.vue
├── views/
│   ├── HomeView.vue
│   ├── PlanetList.vue
│   ├── PeopleList.vue
│   ├── StarshipList.vue
│   └── About.vue
├── router/
│   └── index.js
├── App.vue
└── main.js
```

### 🔗 Endpoints de la API

- 🌍 **Planetas:** [https://swapi.tech/api/planets](https://swapi.tech/api/planets)  
- 👤 **Personajes:** [https://swapi.tech/api/people](https://swapi.tech/api/people)  
- 🚀 **Naves estelares:** [https://swapi.tech/api/starships](https://swapi.tech/api/starships)

### 📊 Información mostrada

**🌍 Planetas:**  
- Nombre  
- Clima  
- Terreno  
- Población 
- Diámetro 
- Gravedad 
- Período de rotación
- Período orbital
- Superficie acuática 

**👤 Personajes:**  
- Nombre  
- Género  
- Altura  
- Color de piel 
- Color de pelo  
- Color de ojos 
- Año nacimiento  

**🚀 Naves estelares:**  
- Nombre  
- Modelo  
- Fabricante  
- Longitud
- Costo
- Tripulación 
- Pasajeros 
- Capacidad de carga
- Consumibles
- Hiperimpulsor: 
- MGLT 
- Velocidad máxima

### 🎨 Diseño

- Esquema de colores amarillo/negro estilo *Star Wars*  
- Efectos *hover* en tarjetas  
- Animaciones suaves  
- Responsive

## 👤 Autor

**[Marco Antonio Conde Valdez]**  
Ingeniería de Sistemas  
Universidad Católica Boliviana "San Pablo"  
Abril 2025