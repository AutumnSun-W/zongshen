import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css'
Vue.use(Router)
Nprogress.configure({ showSpinner: false })
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('./views/Detail')
    },

    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue'),
      redirect: '/home',
      meta: {
        title: '宗申首页'
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue'),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('./views/Cart.vue'),
          meta: {
            title: "购物车"
          }
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('./views/Login'),
          meta: {
            title: '注册'
          }
        },

        {
          path: '/register',
          name: 'Register',
          component: () => import('./views/Register'),
          meta: {
            title: '注册'
          }
        },
        {
          path: '/classify',
          name: 'Classify',
          component: () => import('./views/Classify'),
          meta: {
            title: '分类'
          }
        },
        {
          path: '/payment',
          name: 'payment',
          component: () => import('./views/Payment.vue'),
          meta: {
            title: '结算页面'
          }
        },
        {
          path: '/submitcart',
          name: 'submitcart',
          component: () => import('./views/SubmitCart.vue'),
          meta: {
            title: '支付订单'
          }
        },
        {
          path: '/listfile/:id',
          name: 'listfile',
          component: () => import('./views/Listfile'),
          meta: {
            title: '宗申机车官方商城'
          }
        },
        {
          path: '/individual',
          redirect: '/Login',
          redirect: '/orderdetail',
          name: 'individual',
          component: () => import('./views/Individual'),
          meta: {
            title: '个人中心'
          },
          children: [
            {
              path: '/orderdetail',
              name: 'orderdetail',
              component: () => import('./views/Orderdetail'),
              meta: {
                title: '订单详情'
              },
            },
            {
              path: '/login',
              name: 'login',
              component: () => import('./views/Login'),
              meta: {
                title: '登录'
              }
            },
            {
              path: '/register',
              name: 'register',
              component: () => import('./views/Register'),
              meta: {
                title: '注册'
              }
            },
            {
              path: '/myOrder',
              name: 'myOrder',
              component: () => import('./views/orderson/MyOrder')
            },
            {
              path: '/myIntegral',
              name: 'myIntegral',
              component: () => import('./views/orderson/MyIntegral')
            },
            {
              path: '/balance',
              name: 'balance',
              component: () => import('./views/orderson/Balance')
            },
            {
              path: '/withDrawal',
              name: 'withDrawal',
              component: () => import('./views/orderson/WithDrawal')
            },
            {
              path: '/onlinetopup',
              name: 'onlinetopup',
              component: () => import('./views/orderson/Onlinetopup')
            },
            {
              path: '/drawback',
              name: 'drawback',
              component: () => import('./views/orderson/Drawback')
            },
            {
              path: '/myVoucher',
              name: 'myVoucher',
              component: () => import('./views/orderson/MyVoucher')
            },
            {
              path: '/myCritical',
              name: 'myCritical',
              component: () => import('./views/orderson/MyCritical')
            },
            {
              path: '/myCollect',
              name: 'myCollect',
              component: () => import('./views/orderson/MyCollect')
            },
            {
              path: '/mySite',
              name: 'mySite',
              component: () => import('./views/orderson/MySite')
            },
            {
              path: '/myData',
              name: 'myData',
              component: () => import('./views/orderson/MyData')
            },
            {
              path: '/changePassword',
              name: 'changePassword',
              component: () => import('./views/orderson/ChangePassword')
            },

          ]
        }
      ]
    }
  ]
})
router.beforeEach((to, form, next) => {
  Nprogress.start();
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
router.afterEach(() => {
  Nprogress.done()
})
export default router;