import { createRouter, createWebHistory } from 'vue-router'

// Components
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import AddView from '../views/AddView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add',
      name: 'add',
      component: AddView
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView
    }
  ]
})

export default router
