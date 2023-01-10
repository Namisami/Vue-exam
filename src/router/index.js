import Vue from 'vue'
import VueRouter from 'vue-router'
import AlbumListView from '@/views/AlbumListView'
import AlbumView from "@/views/AlbumView"
import ImageView from "@/views/ImageView"
import AboutView from "@/views/AboutView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'albums',
    component: AlbumListView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/albums/:id',
    name: 'album',
    component: AlbumView,
  },
  {
    path: '/images/:id',
    name: 'image',
    component: ImageView,
  },
]

const router = new VueRouter({
  routes
})

export default router
