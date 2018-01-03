import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'
import Foo from '../pages/Foo.vue'
import Bar from '../pages/Bar.vue'
import Baz from '../pages/Baz.vue'
import About from '../pages/About.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo,
      redirect: { name: 'bar' },
      children: [
        {
          path: 'bar',
          name: 'bar',
          component: Bar,
        },
        {
          path: 'baz',
          name: 'baz',
          component: Baz,
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ]
})
