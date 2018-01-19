import Home from './home.vue'
/*import Slide from './vueSwiper.vue'*/
import AllShop from './allShop.vue'
import Detail from './detail.vue'
import Login from './login.vue'
import Register from './register.vue'
import Kind from './kind.vue'
import Culture from './culture.vue'
import AllDetail from './allDetail.vue'
import Shop from './shop.vue'
var routes=[
  {
    path:'/home',
    component:Home
  },
  {
    path:'/allshop',
    component:AllShop
  },

  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/allDetail/:id',
    name:'allDetail',
    component:AllDetail
  },
  {
    path:'/shop',
    component:Shop
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/kind',
    component:Kind
  },
  {
    path:'/culture',
    component:Culture
  },
  {
    path:'*',
    redirect:'/home'
  }
]
export default({routes})
