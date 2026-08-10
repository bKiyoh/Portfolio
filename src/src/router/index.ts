import { createRouter, createWebHistory } from 'vue-router';
import TopView from '../views/TopView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 64,
        behavior: 'smooth'
      };
    }

    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: TopView
    },
    {
      path: '/about',
      name: 'about',
      redirect: { name: 'home', hash: '#about' }
    },
    {
      path: '/timeline',
      name: 'timeline',
      redirect: { name: 'home', hash: '#timeline' }
    },
    {
      path: '/product',
      name: 'product',
      redirect: { name: 'home', hash: '#product' }
    },
    {
      path: '/contact',
      name: 'contact',
      redirect: { name: 'home', hash: '#contact' }
    }
  ]
});

export default router;
