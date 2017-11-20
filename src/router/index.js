import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import qd2 from '@/qd2/qd2'
import qd3 from '@/qd3/qd3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/qd2',
    	component: qd2
    },
    {
    	path: '/qd3',
    	component: qd3
    }
  ]
})
