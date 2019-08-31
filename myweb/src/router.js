import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/admin/overview',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/admin',
      redirect: '/admin/overview',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: 'overview',
          name: 'Overview',
          component: () => import('./components/Home/MainContent')
        }
      ]
    }
  ]
})
