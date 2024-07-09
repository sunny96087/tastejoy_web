import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/recordOverview',
      name: 'recordOverview',
      component: () => import('../views/RecordOverviewtView.vue')
    },
    {
      path: '/record',
      name: 'record',
      component: () => import('../views/FoodRecordListView.vue')
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import('../views/FriendView.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/ArticleView.vue')
    },
    {
      path: '/friendlist',
      name: 'friendlist',
      component: () => import('../views/FriendList.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'

    }
  ]
})

export default router
