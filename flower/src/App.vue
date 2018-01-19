<template>
  <div id="app">

    <div class="header">

      <img class="pic1" src="//asset.ibanquan.com/asset/58a427060dd76c0ce4000f6e/logo?v=1487152902" alt="">
      <div class="header-r">
        <p>
          <i class="iconfont">&#xe61b;</i>
          <span>0</span>
        </p>
        <span @click="run">☷</span>
      </div>
    </div>
    <transition name="last">
      <div v-if="this.msg" @click="btn">
        <Nav></Nav>
      </div>
    </transition>
    <router-view></router-view>

  </div>
</template>

<script>
  import Vm from './components/aa'
export default {
  name: 'app',
  data () {
    return {
       msg:false,
       msg1:true
    }
  },
  mounted(){
    var _this=this;
    Vm.$on('Back',function (data) {
      _this.msg1=data;
    })
  },
  methods:{
    run(){
      this.msg1=true;
      if(this.msg){
        this.msg=false;
      }else{
        this.msg=true;
      }
    },
    btn(){
      this.msg=this.msg1;
    }
  }
}
</script>

<style lang="scss">
  .header {
    width:16rem;
    height: 2.4rem;
    position:relative;
    z-index: 111;
  }
  .header .pic1{
    width:8.825rem;
    position:absolute;
    top:0.6rem;
    left:0.5rem;

  }
  .header .header-r{
    width:4.6rem;
    height: 2.4rem;
    float:right;
    position:relative;
  }
  .header .header-r p span{
    margin-left:-1.5rem;
    font-size:16px;
    position:absolute;
    top:0.75rem;

  }
  .header .header-r span{
    position:absolute;
    top:0.3rem;
    left:3rem;
    font-size:30px;
  }
  .header .header-r p i{
    margin-top:0.68rem;
    display:block;
    font-size:20px;

  }
  .last-enter{
    position:fixed;
    left:-16rem;
  }
  .last-enter-active{
    transition:1s all ease;
    z-index:999;
  }
  .last-enter-to{
    position:fixed;
    left:0;

  }

  .last-leave{
    position:fixed;
    left:0;
  }
  .last-leave-active{
    transition:1s all ease;
    z-index:999;
  }
  .last-leave-to{
    position:fixed;
    left:-16rem;
  }
</style>
