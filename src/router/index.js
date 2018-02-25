import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutPage from '@/components/AboutPage'
import ListPage from '@/components/listPage'

Vue.use(Router)

// const testValue = function(){ return 1230000 }();

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/about',
      name: 'AboutPage',
      component: AboutPage,
      // props: {testValue: testValue}
    },
    {
      path: '/list',
      name: 'ToDoList',
      component: ListPage,
    }
  ]
})
