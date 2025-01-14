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
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/JoinView.vue')
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
      path: '/graph',
      name: 'graph',
      component: () => import('../views/FoodRecordMapView.vue')
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
      path: '/randomfood',
      name: 'randomfood',
      component: () => import('../views/RandomFoodPicker.vue')
    },
    {
      path: '/publicfood',
      name: 'publicfood',
      component: () => import('../views/PublicFoodSelector.vue')
    },
    {
      path: '/randomcategory',
      name: 'randomcategory',
      component: () => import('../views/RandomCategoryPicker.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
