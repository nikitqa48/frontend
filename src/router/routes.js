
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/home_page.vue') 
    },
    {
      path: '/state',
      name:'support',
      component: () => import('pages/support.vue'),
    },
    {
      path:'/state/support/:id',
      name: 'support_detail',
      component: () => import('pages/support_detail.vue')
    },
    {
      path:'/square',
      name:'square',
      component: () => import ('pages/interactiv_map.vue')
    },
    {
      path:'/news/',
      name: 'news',
      component: () => import('pages/all_news.vue'),
    },
{
  path: '/news/:id',
  name: 'detail',
  component: () => import('pages/detail_news.vue'),
  props: true,
},

{
  path:'/contacts',
  name:'contacts',
  component: () => import('pages/contacts.vue')
},
{
  path:'/project',
  component:() => import('pages/project.vue')
},
{
  path:'/documents',
  component:() => import('pages/documents.vue')
},
{
  path:'region',
  component:() => import('pages/region.vue')
}
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
