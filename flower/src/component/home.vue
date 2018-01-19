<template>
    <div>
      <div class="slide">
        <div class="slideshow">
          <transition-group tag="ul" name="image">
            <li v-for="(a, index) in imgArray" v-show="index===mark" :key="index">
              <a href="#">
                <img :src='a'>
              </a>
            </li>
          </transition-group>
        </div>
        <div class="bar">
          <span @click="change(index)" v-for="(item,index) in imgArray" :key="index" :class="{'active':index===mark}"></span>
        </div>
      </div>
      <div class="more">
     <router-link to="/detail"><h1>商品分类</h1></router-link>
      <ul class="more-u">
        <li v-for="data in this.img">
          <img :src="data.imgs" alt="">
        </li>
      </ul>
    </div>
      <div class="xin">
        <h1>新品上市</h1>
        <ul class="xin-u">
          <li v-for="data in this.news">
            <img :src="data.new" alt="">
            <p>
              <span class="sp1">{{data.na}}</span>
              <span class="sp2">{{data.price}}</span>
            </p>
          </li>

        </ul>
      </div>
      <div class="two">
          <a class="a1" href="">
            <img src="//asset.ibanquan.com/middle/31648/c/427/591404ae0689871fa5002d46/wrapper_pic1_1?v=1494484142" alt="">
          </a>
          <a class="a2" href="">
            <img src="//asset.ibanquan.com/middle/31648/c/427/591404ae0689871fa5002d49/wrapper_pic1_2?v=1494484142" alt="">
          </a>
          <div class="two-z">
            <img src="//asset.ibanquan.com/middle/31648/c/427/591404ae0689871fa5002d4c/wrapper_pic1_3?v=1494484142" alt="">
          </div>
        </div>
      <div class="chun">
        <p>
          <img src="//asset.ibanquan.com/middle/31648/c/427/591404ae0689871fa5002d4f/wrapper_pic2_1?v=1494484142" alt="">
        </p>
        <div class="chun-d">
          <img src="//asset.ibanquan.com/middle/31648/c/427/591404ae0689871fa5002d52/wrapper_pic2_2?v=1494484142" alt="">
        </div>
      </div>
      <div class="new">
            <h1>新闻资讯</h1>
            <div class="new-c">
              <img class="img1" src="//asset.ibanquan.com/middle/31648/c/427/591404ad0689871fa5002d3d/wrapper_oversea3_1?v=1494484141" alt="">
              <div class="new-d">
                <img src="//asset.ibanquan.com/middle/31648/c/427/591404ad0689871fa5002d40/wrapper_oversea3_2?v=1494484141" alt="">
                <div class="mei">
                  <p>每一片茶园，都是精心培养栽培</p>
                  <div class="mei-d">
                    独特的甜味和独特的饮用茶。茶叶采摘块由20天阳光直射前四周，豪华茶掏出茶在你不依靠太阳的光香味成分。味道和和糖果适度的甜味，不与玉露，风味干扰，如很好地在口中融化的好糖果，正在认真填写将其投入热水温度低，还可以享受充裕的时间。
                  </div>
                </div>
              </div>
            <div class="new-d">
              <img src="//asset.ibanquan.com/middle/31648/c/427/591404ad0689871fa5002d43/wrapper_oversea3_3?v=1494484141" alt="">
              <div class="mei">
                <p>每一份茶叶都是用心挑选，手工制作</p>
                <div class="mei-d con">
                  相同生长茶叶（碾茶）和玉露那些粉末形式生产。在有关奢侈品的逼真的绿茶，不像其他的茶，它是说，因为它是喝的茶叶不是酿造更高的美容效果。随着公司
                </div>
              </div>
            </div>
          </div>
          </div>
      <div class="footer">
        <img src="../assets/wei.png" alt="">
      </div>
    </div>
</template>

<script>
  import Json from './json.json'
    export default {
      name: "home",
      data() {
        return {
          msg:false,
          timer:null,
          mark: 0,
          img: [
            {
              imgs: '//asset.ibanquan.com/middle/31648/c/427/591404ab0689871fa5002d16/products_dir_1?v=1494484139'
            },
            {
              imgs: '//asset.ibanquan.com/middle/31648/c/427/591404ab0689871fa5002d19/products_dir_2?v=1494484139'
            },
            {
              imgs: '//asset.ibanquan.com/middle/31648/c/427/591404ab0689871fa5002d1c/products_dir_3?v=1494484139'
            },
            {
              imgs: '//asset.ibanquan.com/middle/31648/c/427/591404ab0689871fa5002d22/products_dir_5?v=1494484139'
            },
            {
              imgs: '//asset.ibanquan.com/middle/31648/c/427/591404ab0689871fa5002d1f/products_dir_4?v=1494484139'
            },
            {
              imgs: '//asset.ibanquan.com/middle/31648/c/427/591404ab0689871fa5002d25/products_dir_6?v=1494484140'
            },
            {
              imgs: '//asset.ibanquan.com/middle/31648/c/427/591404ac0689871fa5002d28/products_dir_7?v=1494484140'
            },
            {
              imgs: '//asset.ibanquan.com/middle/31648/c/427/591404ac0689871fa5002d2b/products_dir_8?v=1494484140'
            }


          ],

         /* news:[],*/
          news: [
            {
              new: 'http://asset.ibanquan.com/image/58a41e2e0dd76c0ce4000ef8/s_w330h330.png?v=1487150638',
              na: '抹茶',
              price: '￥99.00'
            },
            {
              new: 'http://asset.ibanquan.com/image/58a41ea2b1b95701b900102c/s_w330h330.png?v=1487150754',
              na: '玄米茶',
              price: '￥120.00'
            },
            {
              new: 'http://asset.ibanquan.com/image/58a41f17b1b95701b9001038/s_w330h330.png?v=1487150871',
              na: '三木茶',
              price: '￥128.00'
            },
            {
              new: 'http://asset.ibanquan.com/image/58a41e6f3f8f9075790010ac/s_w330h330.png?v=1487150704',
              na: '红茶',
              price: '￥89.00'
            },
            {
              new: 'http://asset.ibanquan.com/image/58a41ee19bedc4778c00105d/s_w330h330.png?v=1487150818',
              na: '绿茶点心',
              price: '￥18.00'
            },
            {
              new: 'http://asset.ibanquan.com/image/58a41f06b1b95701b9001034/s_w330h330.png?v=1487150854',
              na: '抹茶饼干',
              price: '￥18.00'
            }
          ],
          imgArray: [
            '//asset.ibanquan.com/asset/58a419d00dd76c0ce00010a2/index_slide_1?v=1487149520',
            '//asset.ibanquan.com/asset/58a419d00dd76c0ce00010a7/index_slide_2?v=1487149520',
            '//asset.ibanquan.com/asset/58a5567a9bedc4778c001456/index_slide_3?v=1487230586'
          ]


        }
      },
      methods: {
        autoPlay() {
          this.mark++;
          if (this.mark === 3) { //当遍历到最后一张图片置零
            this.mark = 0
          }
        },
        play() {
          this.timer=setInterval(this.autoPlay, 2500)
        },
        change(i) {
          this.mark = i
        },
        stop(){
         clearInterval(this.timer)
        },
        move(){
          this.timer=setInterval(this.autoPlay(),2500)
        }
      },
      created() {
        this.play()
      }/*,
      mounted(){
        var _this=this;
        _this.news=Json.data[1]
      }
*/

    }
</script>

<style scoped>
.header {
  width:16rem;
  height: 2.4rem;
  position:relative;
  z-index:200;
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

.swiper-slide img{
  width:16rem;
  height:7.7rem;
}
.more{
    width:16rem;
    height:19.2rem;
    position:relative;
    border-bottom:1px dashed red;
  }
.more a{
  color:#000;
}
.more h1{
    position:absolute;
    top:1rem;
    left:0.5rem;
  }
.more .more-u{
    position:absolute;
    top:2.4725rem;
  }
.more .more-u li{
    float:left;
    margin:0.4rem;

  }
.more .more-u li img{
  width:7.2rem;
  height:3.2rem;


}
.xin{
  width:16rem;
  height:27.8rem;
  position:relative;
  border-bottom:1px dashed red;
}
.xin h1{
  position:absolute;
  top:1rem;
  left:0.5rem;
}
.xin .xin-u{
    position:absolute;
    top:2.4725rem;
  }
.xin .xin-u li{
    width:7rem;
    height:8rem;
    float:left;
    margin-left:0.7rem;
    text-align:center;
  }
.xin .xin-u li img{
  width:5rem;
  height:4.7rem;

}
.xin .xin-u li p{
  margin-top:1rem;
}
.xin .xin-u li p span{
  display:block;
  font-size:16px;
  text-align:center;


}
.xin .xin-u li p span.sp1{
   color:#000;
   margin-top:-10px;

 }
.xin .xin-u li p span.sp2{

  margin-top:10px;
  color:#666;

}

.slide {
  width:16rem;
  height:7.7rem;
  overflow: hidden;
  position: relative;
}
.slideshow {
  width:16rem;
  height:7.7rem;
}
.slideshow ul li {
  position: absolute;
}

.slideshow ul li a img {
  width:16rem;
  height:7.7rem;
}
.bar {
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
}
.bar span {
  width: 15px;
  height: 15px;
  border-radius:15px;
  background: white;
  display: inline-block;
  margin-right: 10px;
}
.active {
  background: red !important;
}
.image-enter-active {
  transform: translateX(0);
  transition: all 1.5s ease;
}
.image-leave-active {
  transform: translateX(-100%);
  transition: all 1.5s ease;
}
.image-enter {
  transform: translateX(100%);
}
.image-leave {
  transform: translateX(0);
}
.two{
  width:16rem;
  height:17rem;
  margin-top:1rem;
  border-bottom:1px dashed red;
  position:relative;
  top:-1rem;
}
.two .a1{
  width:7.15rem;
  height:6.4rem;
  display:block;
  border:1px solid #ccc;
  position:absolute;
  top:0.7rem;
  left:0.65rem;

}
.two .a1 img{
    width:6.5rem;
    height:6rem;
  margin-left:0.3rem;
  margin-top:0.2rem;
}

.two .a2 img{
  width:7.05rem;
  height:7rem;
  float:right;
  margin-top:0.6rem;
  margin-right:0.3rem;
}
.two .two-z{
    margin-top:1.5rem;
  }
.two .two-z img{
  width:15rem;
  height:7.225rem;
  margin-top:0.5rem;
  margin-left:0.5rem;
}
  .chun{
    width:16rem;
    height:23.475rem;
    border-bottom:1px dashed red;

  }
.chun p img{
  width:14.6rem;
  height:7.825rem;
  margin-top:0.4rem;
  margin-left:0.8rem;
}
.chun .chun-d{
  width:14.45rem;
  height:13.675rem;
  margin-left:0.8rem;
  margin-top:0.4rem;
}
.chun .chun-d img{
  width:14rem;
  height:13rem;
  margin-top:0.25rem;
  margin-left:0.25rem;
}
  .new{
    width:16rem;
    height:40rem;
    position:relative;
  }
  .new h1{
    position:absolute;
    top:1rem;
    left:0.5rem;
  }
  .new .new-c{
    width:14.65rem;
    height:auto;
    position:absolute;
    top:2.8rem;
    left:0.65rem;
    text-align: center;
  }
.new .new-c .img1{
  width:14.65rem;
  }
.new .new-c .new-d{
  margin-top:0.5rem;
  width:14.65rem;
}
.new .new-c .new-d img{
  width:14.65rem;

}
.new .new-c .new-d .mei{
  margin-top:0.5rem;
}
.new .new-c .new-d .mei p{
  font-size:18px;
  text-align:center;
}
.new .new-c .new-d .mei .mei-d{
  font-size:14px;
  height:2rem;
  width:14.65rem;
  margin-top:0.5rem;

}
.footer{
    text-align:center;
  }
</style>
