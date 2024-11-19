import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import GameFindMap from '../views/GameFindMap.vue';
import GameFindCoordinates from '../views/GameFindCoordinates.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/game-find-map',
    name: 'GameFindMap',
    component: GameFindMap,
  },
  {
    path: '/game-find-coordinates',
    name: 'GameFindCoordinates',
    component: GameFindCoordinates,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;