import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = ()=>import('../views/home/Home')
const Category = ()=>import('../views/category/Category')
const Cart = ()=>import('../views/cart/Cart')
const Prefile =()=>import('../views/prefile/Prefile')

const router =  new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/prefile',
      name: 'Prefile',
      component: Prefile
    },
  ],
  mode:'history'
})

const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

export default router
