import Vue from 'vue'
import Router from 'vue-router'

import Belajar from '@/components/BelajarPage'
import AddBelajar from '@/components/AddBelajar'
import Tentang from '@/components/TentangPage'
import Referensi from '@/components/ReferensiPage'
import TambahLaman from '@/components/TambahLaman'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'belajar',
      component: Belajar
    },
    {
      path: '/add_content',
      name: 'add_content',
      component: AddBelajar
    },
    {
      path: '/tentang',
      name: 'tentang',
      component: Tentang
    },
    {
      path: '/referensi',
      name: 'referensi',
      component: Referensi
    },
    {
      path: '/tambah_laman',
      name: 'tambah_laman',
      component: TambahLaman
    }
  ]
})
