
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home_page.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/second_layout.vue'),
    children: [
      {
        path: 'state/', component: () => import('pages/support.vue')
      }
    ]
  },
    {
      path: '/news/:id',
      name: 'detail',
      component: () => import('layouts/Detail_news.vue'),
      props: true,
    },
    {
      path:'/calculate',
      component: () => import('layouts/Calculate.vue')
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
