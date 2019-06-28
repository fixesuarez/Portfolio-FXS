import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'

import realisations from '@/router/realisations'
import skills from '@/router/skills'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    name: 'home'
  },
  ...realisations,
  ...skills
  ]
})