import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import MyProducts from '../views/MyProducts.vue'
import EditProduct from '../views/EditProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/myproducts',
    name: 'MyProducts',
    component: MyProducts
  },
  {
    path: '/editproduct/:id',
    name: 'EditProduct',
    component: EditProduct
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
