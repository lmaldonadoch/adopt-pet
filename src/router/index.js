import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Pets from '../views/Pets.vue';
import Dogs from '../views/Dogs.vue';
import Cats from '../views/Cats.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/pets/:species/:id',
    name: 'Pets',
    component: Pets,
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats,
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
