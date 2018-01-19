<template>
  <swiper :options="swiperOption" ref="mySwiper">
  <swiper-slide class="box">
  <div class="text-d">
  <input type="text" value="搜索全店">
  </div>
  <div class="login" @click="back">
        <p>
          <router-link to="/login"><span>登录</span></router-link>
          <router-link to="/register"><span class="a1">注册</span></router-link>

        </p>

        <ul class="list">
          <router-link to="/home"><li>首页</li></router-link>
          <router-link to="/detail"> <li>所有产品</li></router-link>
          <router-link to="/detail"><li>茶的种类</li></router-link>
          <router-link to="/kind"><li>品牌故事</li></router-link>
          <router-link to="/culture"><li>茶文化</li></router-link>

        </ul>
      </div>

</swiper-slide>
    <div class="back" @click="back"></div>
    <swiper-slide></swiper-slide>
  </swiper>
</template>

<script>
  import Vm from './aa'
  import {swiper , swiperSlide} from 'vue-awesome-swiper'
  var  SwiperCss = require('../component/animate.min.css')
  export default {
    name: "Nav",
    components : {
      swiper ,
      swiperSlide,
      SwiperCss
    },
    data() {
      return {
        num:false,
        swiperOption: {
          notNextTick: true,
          direction : 'horizontal',//方向
          mousewheelControl : true
        },

      }
    },
    methods:{
      back(){
        Vm.$emit('Back',this.num)
      }
    }
  }
</script>


<style scoped>

input{
  width:9rem;
  height:1.5rem;
  position:absolute;
  top:0.35rem;
  left:0.5rem;
  line-height:1.5rem;
  outline: none;
  border:1px solid #fff;
}
.text-d{
  width:16rem;
  height:2.4rem;
  background:#000;
}
.box{
  width:16rem;
  height:100%;
  z-index: 100;
  background:#fff;
  position:fixed;
  top:0;

}
  .login{
    width:16rem;
    height:18rem;
    position:relative;

  }
  .login .list{
    width:16rem;
    position:absolute;
    top:2.5rem;
  }
  .login  p span{
    text-decoration: none;
    width:7.9rem;
    height:2.5rem;
    border-right:1px solid #000;
    line-height:2.5rem;
    text-align:center;
    float:left;
    color:#000;
    display:block;
    border-bottom:1px solid #000;

  }
.login span.a1{
  border-right:0;

}
.login .list li{
    width:14rem;
    height:2rem;
    line-height:2rem;
    text-align:center;
    font-size:25px;
    margin:0 auto;
    color:#000;

    border-bottom:1px solid #000;

}
a{
  text-decoration: none;
}
.back{
  width: 16rem;
  height: 15rem;
  z-index: 100;
  position:absolute;
  top:18rem;
  left: 0;
}
</style>
