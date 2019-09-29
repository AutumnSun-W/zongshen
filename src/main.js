import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Vant from 'vant';
import 'vant/lib/index.css';
import './common.css';
import './data/Product'
import './data/detail'
import vshare from 'vshare';




Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(vshare)
Vue.use(Vuex)

var cart = JSON.parse(localStorage.getItem("cart") || '[]')
const store = new Vuex.Store({
  state: {
    username: name,
    token: '',
    cart: [] //{id:商品id , count:要购买的数量,price:商品单价}
  },
  mutations: {
    addTocart(state, goods) {
      var flag = false
      state.cart.some(item => {
        if (item.id == goods.id) {
          item.count += parseInt(goods.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.cart.push(goods)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  getters: {
    getGoodsCount(state) {
      var o = {}
      state.cart.forEach(item => {
        o[item.id] = item.count
      });
      return o
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')