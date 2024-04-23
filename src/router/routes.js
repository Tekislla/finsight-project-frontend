const routes = [
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/MainDashboard.vue') },
      { path: 'financas', component: () => import('src/pages/MinhasFinancas.vue') },
      { path: 'compromissos', component: () => import('src/pages/MeusCompromissos.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('src/layouts/IndexLayout.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
