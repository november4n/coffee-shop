import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '../views/HeroView.vue'
import OurCoffeeView from '../views/OurCoffeeView.vue'
import ContactsView from '../views/ContactsView.vue'
import ForYourPleasureView from '../views/ForYourPleasureView.vue'
import ThankYouView from '../views/ThankYouView.vue'
import GoodItemView from '../views/GoodItemView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HeroView
  },
  {
    path: '/our-coffee',
    component: OurCoffeeView
  },
  {
    path: '/for-your-pleasure',
    component: ForYourPleasureView
  },
  {
    path: '/contacts',
    component: ContactsView
  },
  {
    path: '/thank-you',
    component: ThankYouView
  },
  {
    name: 'coffee',
    path: '/our-coffee/:id',
    component: GoodItemView
  },
  {
    name: 'goods',
    path: '/for-your-pleasure/:id',
    component: GoodItemView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
