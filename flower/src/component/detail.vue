<template>
<div>
<div class="first">
  <p><router-link to="/home">首页</router-link> > 所有商品 </p>
</div>

  <div class="tea">
    <span>绿茶</span>
  </div>

  <div class="pin">
    <ul class="pin-u">
      <li>
        <span>品牌</span>
        <span class="sp2">西湖</span>
      </li>
      <li class="last">
        <span>类别</span>
        <p>抹茶 红茶  混合茶</p>
        <p class="p1"> 小食 绿茶</p>
      </li>
    </ul>
  </div>

  <div class="ban">
    <ul>
     <li   v-for="data in this.msg.gamedata">
       <router-link :to="data.To">
        <img :src="data.img" alt="">
      <p>
        <span class="sp1">{{data.name}}</span>
        <span class="sp2">{{data.pirce}} <del>{{data.Del}}</del></span>
      </p>

     </router-link>
     </li>
    </ul>
  </div>

</div>
</template>

<script>
      import Json from './json.json'
        export default {
          name: "detail",
          data(){
            return{
              msg:[]
         /*     msg:[
                {
                  img:'http://asset.ibanquan.com/image/58a52355b1b95701b90013dc/s_w330h330.png?v=1487217249',
                  na:'半生绿茶',
                  price:'￥99.00',
                  num:'￥120.00'
                },
                {
                  img:'http://asset.ibanquan.com/image/58a5225a9bedc4778c001350/s_w330h330.png?v=1487217242',
                  na:'熟煎红茶',
                  price:'￥99.00',
                  num:'￥120.00'
                },
                {
                  img:'http://asset.ibanquan.com/image/58a41f17b1b95701b9001038/s_w330h330.png?v=1487150871',
                  na:'三木茶',
                  price:'￥128.00',
                  num:''
                },
                {
                  img:'http://asset.ibanquan.com/image/58a41f06b1b95701b9001034/s_w330h330.png?v=1487150854',
                  na:'抹茶饼干',
                  price:'￥18.00',
                  num:''
                },
                {
                  img:'http://asset.ibanquan.com/image/58a41ee19bedc4778c00105d/s_w330h330.png?v=1487150818',
                  na:'绿茶点心',
                  price:'￥18.00',
                  num:''
                },
                {
                  img:'http://asset.ibanquan.com/image/58a41ea2b1b95701b900102c/s_w330h330.png?v=1487150754',
                  na:'玄米茶',
                  price:'￥120.00',
                  num:''
                },
                {
                  img:'http://asset.ibanquan.com/image/58a41e6f3f8f9075790010ac/s_w330h330.png?v=1487150704',
                  na:'红茶',
                  price:'￥89.00',
                  num:''
                },
                {
                  img:'http://asset.ibanquan.com/image/58a41e2e0dd76c0ce4000ef8/s_w330h330.png?v=1487150638',
                  na:'抹茶',
                  price:'￥99.00',
                  num:''
                }

              ]*/
            }
      },
          mounted(){
            var _this=this;
            _this.msg=Json.data[1]
          }
    }
</script>

<style scoped>
.first{
  width:16rem;
  height:2.275rem;
  line-height:2.275rem;
  font-size:18px;
  margin-top:2.5rem;


}
a{
  text-decoration: none;
  color:#000;
}
.first p{
  width:15.5rem;
  margin:0 0.5rem;
  border-bottom:2px solid #ccc;
}
.first p a{
  color:#000;
  text-decoration:none;
}
.tea{
    width:16rem;
    height:2.5rem;
   /* background:red;*/
    line-height:2.5rem;
  }
.tea span{
  margin-left:0.5rem;
}
.pin .pin-u{
    width:15rem;
    height:6rem;
    margin:0 auto;
   /* background:yellow;*/
  }
.pin .pin-u li{
  width:15rem;
  height:2.5rem;
  font-size:18px;
  border:1px solid #ccc;
}
.pin .pin-u li span{
  width:3rem;
  text-align:center;
  height:2.5rem;
  line-height:2.5rem;
  display:inline-block;

}
.pin .pin-u li span.sp2{
  width:10.6rem;
  border-left:2px solid #ccc;

}
.pin .pin-u li.last{
  height:3.5rem;
  background:#f3f4f4;
}
.pin .pin-u li.last span{
  width:3.2rem;
  border-right:2px solid #ccc;
  height:3.5rem;
}
.pin .pin-u li.last p{
  float:right;
  width:11rem;
  margin-top:15px;
}
.pin .pin-u li.last p.p1{
  margin-top:-30px;
}
.ban{
  width:16rem;
  height:auto;
 /* background:red;*/
  margin-top:0.5rem;
}
  .ban ul{
    margin:0.5rem;
    /*background:blue;*/

  }
  .ban ul li{
    width:8.5rem;
    height:11.5rem;
   /* border:1px solid #ccc;*/
    margin-left:3rem;
    margin-top:2rem;
  }
  .ban ul li img{
    width:8.5rem;
    height:8.5rem;
  }
.ban ul li p{
  width:8.5rem;
  margin-top:0.8rem;
  line-height:0.8rem;
  text-align:center;

}
.ban ul li p span{
  display: block;
  font-size:18px;
  margin-top:0.5rem;
}

</style>
