import Layout from '@/page/index/'
export default [
   {
        path: '/login',
        name: '登录页',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/page/login/index'),
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }
    },
//  首页**
    {
        path: '/index',
        name: '首页',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/page/homeIndex/index'),
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }
    },
    {
      path: '/userCenter',
      name: '用户中心',
      component: () =>
        import ( /* webpackChunkName: "page" */ '@/page/userCenter/index'),
      meta: {
        keepAlive: true,
        isTab: false,
        isAuth: false
      }
    },
    // 测试页面
    {
      path: '/test',
      name: '测试页面',
      component: () =>
        import ( /* webpackChunkName: "page" */ '@/page/test/index'),
      meta: {
        keepAlive: false,
        isTab: false,
        isAuth: false
      }
    },
//  水上申请服务**
   {
   	    path: '/waterApply',
        name: '水上申请服务',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/page/waterApply/index'),
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }

   },
  {
    path: '/inquire',
    name: '我要办',
    component: () =>import('@/page/EventQuery'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/powerList',
    name: '权责清单',
    component: () =>import('@/page/powerList'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
    {
        path: '/404',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/components/error-page/404'),
        name: '404',
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }

    },
    {
        path: '/403',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/components/error-page/403'),
        name: '403',
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }
    },
    {
        path: '/500',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/components/error-page/500'),
        name: '500',
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }
    },
    {
        path: '/',
        name: '主页',
        redirect: '/wel'
    },
    {
        path: '/myiframe',
        component: Layout,
        redirect: '/myiframe',
        children: [{
            path: ":routerPath",
            name: 'iframe',
            component: () =>
                import ( /* webpackChunkName: "page" */ '@/components/iframe/main'),
            props: true
        }]
    }
]
