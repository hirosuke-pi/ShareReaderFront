import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import HomePage from '@/components/homePages/homePage'
import Login from '@/components/logins/Login'
import NotFoundComponent from '@/components/NotFound'
import managerIndex from '@/components/managerPages/managerIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: Login,
      beforeEnter: function (to, from, next) {
        store.commit('changeFalseLoginMode')
        console.log(store.state.loginMode)
        return next()
      }
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: Login,
      beforeEnter: function (to, from, next) {
        store.commit('changeTrueLoginMode')
        console.log(store.state.loginMode)
        return next()
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: managerIndex
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundComponent
    }
  ]
})
