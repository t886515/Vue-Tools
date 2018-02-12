import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutPage from '@/components/AboutPage'

Vue.use(Router)

const testValue = function(){ return 1230000 }();

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/about',
      name: 'AboutPage',
      component: AboutPage,
      props: {testValue: testValue}
    }
  ]
})
