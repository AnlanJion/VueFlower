<template>
  <swiper :options="swiperOption" ref="mySwiper">

    <swiper-slide>
      <img src="//asset.ibanquan.com/asset/58a419d00dd76c0ce00010a2/index_slide_1?v=1487149520" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="//asset.ibanquan.com/asset/58a419d00dd76c0ce00010a7/index_slide_2?v=1487149520" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="//asset.ibanquan.com/asset/58a5567a9bedc4778c001456/index_slide_3?v=1487230586" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>//
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
   <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  var SwiperCss=require('./swiper.min.css')
    export default {
        name: "vue-swiper",
      components: {
        swiper,
        swiperSlide,
        SwiperCss
      },
      data(){
          return {
            swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
              // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
              notNextTick: true,
              loop:true,
              effect:'fade',//淡入淡出
              // swiper configs 所有的配置同swiper官方api配置
              autoplay: 2000,//自动播放
              direction: 'horizontal',//方向
              grabCursor: true,// 鼠标变小手 false不变
              setWrapperSize: true,//使用flexbox布局在wrapper上添加等于slides的宽高
              autoHeight: true,//自动高度
              pagination: '.swiper-pagination',//分页器
              paginationClickable: true,//点击分页器的指示点分页器会控制swiper切换
              prevButton: '.swiper-button-prev',//上一张
              nextButton: '.swiper-button-next',//下一张
             /* scrollbar: '.swiper-scrollbar',*///滚动条
              mousewheelControl: true,//鼠标滑轮
              observeParents: true,//应用于swiper的父元素，当swiper的父元素变化是，更新数据
              // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
              debugger: true,
            }
          }
      }
    }
</script>

<style scoped>
.swiper-slide{
  width:16rem;
  height:7.7rem;
}

</style>
