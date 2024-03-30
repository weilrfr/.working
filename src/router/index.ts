import { createRouter, createWebHistory } from 'vue-router'
import ChaptersView from '@/views/ChaptersView.vue'
import EmployeesView from '@/views/EmployeesView.vue'
import TitlesView from '@/views/TitlesView.vue'


const routes = [
  {
    path: '/',
    name: 'chapters',
    component: ChaptersView,
    meta: {
      title: 'Chapters'
    }
  },
  {
    path: '/titles',
    name: 'titles',
    component: TitlesView,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/employees',
    name: 'Chapters',
    component: EmployeesView,
    meta: {
      title: 'Chapters'
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
  next()
})

export default router
