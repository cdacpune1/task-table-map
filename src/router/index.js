import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Team from '../views/Team.vue'
import Teamcards from '../views/Teamcards.vue'
import Project from '../views/Project.vue'
import Login from '../views/Login.vue'
import Table1 from '../views/Table1.vue'
import Task from '../views/Task.vue'
import Tablecard from '../views/Tablecard.vue'
import Activity from '../views/activity.vue'
import Activitycard from '../views/ActivityCard.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
 component: About
  },

  {
    path: '/team',
    name: 'team',
   component: Team
  },
  
  {
    path: '/team1',
    name: 'team1',
   component: Teamcards
  },
  {
    path: '/proj',
    name: 'proj',
   component: Project
  },
  {
    path: '/login',
    name: 'login',
   component: Login
  },
  {
    path: '/table1',
    name: 'table1',
   component: Table1
  },
  {
    path: '/task',
    name: 'task',
   component: Task
  },
  {
    path: '/tablecard',
    name: 'tablecard',
   component: Tablecard
  },
  {
    path: '/activity',
    name: 'activity',
   component: Activity
  },
  {
    path: '/activitycard',
    name: 'activitycard',
   component: Activitycard
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
