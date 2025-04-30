import { createRouter, createWebHistory } from 'vue-router'
import PeopleList from '../views/PeopleList.vue'
import About from '../views/About.vue'
import StarshipList from '../views/StarshipList.vue'
import PlanetList from '../views/PlanetList.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/people',
    name: 'PeopleList',
    component: PeopleList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/starship',
    name: 'starshipList',
    component: StarshipList
  },
  {
    path: '/planet',
    name: 'planetList',
    component: PlanetList
  }
  ,
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  }
    
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router