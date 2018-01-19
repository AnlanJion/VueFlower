<template>
<div>
<div v-for="data in this.Detail.gamedata" v-if="data.To==$route.params.id">
  <div class="first">
    <p><router-link to="/home">首页</router-link> > <router-link to="/detail">所有商品</router-link> > <span>{{data.name}}</span></p>
  </div>

  <div class="center">
    <ul class="center-u">
      <div class="ul-d">
        <img :src="data.DLimg" alt="" :style="a">
        <img :src="data.DRimg" alt="" :style="b">
      </div>
      <div class="con">
        <li @click="run(1)">
          <img :src="data.XLimg" alt="">
        </li>
        <li @click="run(2)">
          <img :src="data.XRimg" alt="">
        </li>

      </div>
    </ul>
  </div>

  <div class="mo">
    <h3>{{data.name}}</h3>
    <p class="mo-p">{{data.rnt}}</p>
    <span>{{data.price}}</span>
    <span class="sp1">已售出<b>0</b>件</span>
    <div class="mo-d">
      <span>选择数量</span><br/>
     <div class="btn-d">
    <button @click="reduce(data)">-</button><strong>{{data.num}}</strong><button class="btn" @click="add(data)">+</button><span>件(库车133件)</span>
     </div>
      <!--<router-link :to="{path:'/shop',query:{name:data.To}}"><p>加入购物车</p></router-link>-->
      <p @click="jia(1)">加入购物车</p>
      <div class="add" :style="c" @click="jia(2)">
        <span>添加成功！</span>
        <span> <router-link :to="{path:'/shop',query:{name:data.name}}">去购物车结算</router-link></span>
        <span>关闭</span>
      </div>
    </div>


  <div class="ban">
    <h3>猜你喜欢</h3>
    <ul>
      <li>
        <img :src="data.Dimg1" alt="" class="img1">
        <img :src="data.Dimg2" alt="">
        <img :src="data.Dimg3" alt="">
      </li>
    </ul>
  </div>
  </div>
</div>
</div>
</template>

<script>
  import Json from './json.json';

  // import Vm from '../components/aa.js';

    export default {
        name: "all-detail",
      data() {
        return {
          a: 'display:block',
          b: 'display:none',
         /* numb: 1,*/

          c:'display:none',
          Detail: []


        }
      },
      methods:{
          run(a){
            if(a==1){
                  this.a='display:block';
                  this.b='display:none';
            }
            if(a==2){
              this.b='display:block';
              this.a='display:none';
            }

          },
        reduce(data){
          if(data.num==1){
            data.num=1
          }else{
            data.num--
          }

        },
        add(data){
          data.num++
        },
        jia(a){
            if(a==1){
              this.c='display:block'
            }else if(a==2){
              this.c='display:none'
            }

        }

      },
      mounted(){
        var _this=this;
        _this.Detail=Json.data[2]

      }
    /*  data(){
          return{
            msg:[
              {
                To:'bslc',
                name:'半生绿茶',
                sale:0,
                repertory:123,
                price:'￥99.00',
                Del:'$120.00',
                DLimg:'//asset.ibanquan.com/image/58a52355b1b95701b90013dc/s_w453h453.png?v=1487217249',
                DRimg:'//asset.ibanquan.com/image/58a52355b1b95701b90013df/s_w453h453.png?v=1487217242',
                XLimg:'//asset.ibanquan.com/image/58a52355b1b95701b90013dc/s_w453h453_75x75.png?v=1487217249',
                XRimg:'//asset.ibanquan.com/image/58a52355b1b95701b90013df/s_w453h453_75x75.png?v=1487217242',
                rnt:'独特的甜味和独特的饮用茶。茶叶采摘块由20天阳光直射前四周，豪华茶掏出茶在你不依靠太阳的光香味成分。',
                Dimg1:'//asset.ibanquan.com/image/58a5230d0dd76c0ce400122c/s.jpeg?v=1487217421',
                Dimg2:'//asset.ibanquan.com/image/58a50f379bedc4778c001272/s.png?v=1487212343',
                Dimg3:'//asset.ibanquan.com/image/58a50f320dd76c0ce40010a1/s.png?v=1487212338'
              },
              {
                To:'jshc',
                name:'煎熟红茶',
                sale:9,
                repertory:123,
                price:'￥99.00',
                Del:'$120.00',
                DLimg:'//asset.ibanquan.com/image/58a52355b1b95701b90013dc/s_w453h453.png?v=1487217249',
                DRimg:'//asset.ibanquan.com/image/58a52355b1b95701b90013df/s_w453h453.png?v=1487217242',
                XLimg:'//asset.ibanquan.com/image/58a52355b1b95701b90013dc/s_w453h453_75x75.png?v=1487217249',
                XRimg:'//asset.ibanquan.com/image/58a52355b1b95701b90013df/s_w453h453_75x75.png?v=1487217242',
                rnt:'独特的甜味和独特的饮用茶。茶叶采摘块由20天阳光直射前四周，豪华茶掏出茶在你不依靠太阳的光香味成分。',
                Dimg1:'//asset.ibanquan.com/image/58a5230d0dd76c0ce400122c/s.jpeg?v=1487217421',
                Dimg2:'//asset.ibanquan.com/image/58a50f379bedc4778c001272/s.png?v=1487212343',
                Dimg3:'//asset.ibanquan.com/image/58a50f320dd76c0ce40010a1/s.png?v=1487212338'
              },
              {
                To:'smc',
                name:'三目茶',
                sale:54,
                repertory:452,
                pirce:'￥128.00',
                XLimg:'//asset.ibanquan.com/image/58a41f17b1b95701b9001038/s_w453h453_75x75.png?v=1487150871',
                Dimg1:'//asset.ibanquan.com/image/58a41f17b1b95701b9001038/s_w453h453.png?v=1487150871',
              },
              {
                To:'mcbg',
                name:'抹茶饼干',
                sale:3,
                repertory:546,
                pirce:'￥18.00',
                DLimg:'//asset.ibanquan.com/image/58a41f06b1b95701b9001034/s_w453h453.png?v=1487150854',
                DRimg:'http://asset.ibanquan.com/image/58a54406b1b95701b9001454/s_w453h453.jpeg?v=1487225862&yhsdretry=1515668890294',
                XLimg:'//asset.ibanquan.com/image/58a41f06b1b95701b9001034/s_w453h453_75x75.png?v=1487150854',
                XRimg:'//asset.ibanquan.com/image/58a54406b1b95701b9001454/s_w453h453_75x75.jpeg?v=1487225862',
                rnt:'味道和和糖果适度的甜味，不与玉露，风味干扰，如很好地在口中融化',
                Dimg1:'http://asset.ibanquan.com/image/58a5448c9bedc47790001539/s.png?v=1487225997',
                Dimg2:'http://asset.ibanquan.com/image/58a543ff9bedc4779000152c/s.jpeg?v=1487225855',
                Dimg3:'http://asset.ibanquan.com/image/58a543feb1b95701b9001451/s.jpeg?v=1487225854'
              },
              {
                To:'lcdx',
                name:'绿茶点心',
                sale:9,
                repertory:896,
                pirce:'￥18.00',
                DLimg:'//asset.ibanquan.com/image/58a41ee19bedc4778c00105d/s_w453h453.png?v=1487150818',
                rnt:'味道和和糖果适度的甜味，不与玉露，风味干扰，如很好地在口中融化',
                Dimg1:'//asset.ibanquan.com/image/58a523b63f8f907579001409/s.jpeg?v=1487217590',
                Dimg2:'//asset.ibanquan.com/image/58a5237f0dd76c0ce4001230/s.jpeg?v=1487217535',
                Dimg3:'//asset.ibanquan.com/image/58a41e1f0dd76c0ce0001130/s.png?v=1487150623'
              },
              {
                To:'xmc',
                name:'玄米茶',
                sale:56,
                repertory:456,
                pirce:'￥120.00',
                DLimg:'//asset.ibanquan.com/image/58a41ea2b1b95701b900102c/s_w453h453.png?v=1487150754',
                rnt:'高山、流水、云雾滋养、天然、健康',
                Dimg1:'//asset.ibanquan.com/image/58a5230d0dd76c0ce400122c/s.jpeg?v=1487217421',
                Dimg2:'//asset.ibanquan.com/image/58a523e00dd76c0ce0001413/s.png?v=1487217632',
                Dimg3:'//asset.ibanquan.com/image/58a41e263f8f907575000f93/s.png?v=1487150630'
              },
              {
                To:'hc',
                name:'红茶',
                sale:14,
                repertory:896,
                pirce:'￥89.00',
                DLimg:'//asset.ibanquan.com/image/58a41e6f3f8f9075790010ac/s_w453h453.png?v=1487150704',
                Dimg1:'//asset.ibanquan.com/image/58a523b63f8f907579001409/s.jpeg?v=1487217590',
                Dimg2:'//asset.ibanquan.com/image/58a50f2e9bedc4778c00126f/s.png?v=1487212334',
                Dimg3:'//asset.ibanquan.com/image/58a50f280dd76c0ce400109e/s.png?v=1487212329'
              },
              {
                To:'mc',
                name:'抹茶',
                sale:27,
                repertory:456,
                pirce:'￥99.00',
                DLimg:'//asset.ibanquan.com/image/58a41e2e0dd76c0ce4000ef8/s_w453h453.png?v=1487150638',
                rnt:'独特的甜味和独特的饮用茶。茶叶采摘块由20天阳光直射前四周，豪华茶掏出茶在你不依靠太阳的光香味成分。',
                Dimg1:'//asset.ibanquan.com/image/58a523b63f8f907579001409/s.jpeg?v=1487217590',
                Dimg2:'http://asset.ibanquan.com/image/58a547f13f8f907579001454/s.png?v=1487226865',
                Dimg3:'http://asset.ibanquan.com/image/58a547f89bedc4778c0013cf/s.jpeg?v=1487226872'
              },
            ]
          }
      }*/
    }
</script>

<style scoped>
  .first{
    width:16rem;
    height:2.275rem;
    line-height:2.275rem;
    font-size:14px;
    margin-top:1rem;
  }
a{
  text-decoration: none;

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
  .first p span{
    color:#666;
  }
  .center{
    width:16rem;
    height:10rem;

  }
  .center .center-u{
    width:15rem;
    height:10rem;
    margin-left:0.5rem;
  }
  .center .center-u .ul-d{
    margin-top:0.2rem;
  }
  .center .center-u .ul-d img{
    width:14rem;
    height:6.5rem;
    margin-left:0.5rem;
  }
  .center .center-u .con{
    margin-left:4rem;
  }
  .center .center-u li{
    width:3rem;
    height:3rem;
    float:left;
    margin-left:0.5rem;
    margin-top:0.4rem;

  }
  .center .center-u li:hover img{
    opacity:1;
  }
  .center .center-u li img{
    width:3rem;
    height:3rem;
    opacity:0.5;
  }
  .mo{
    width:15rem;
    height:14rem;
    margin:1rem 0.5rem;
  }
  .mo h3{
      line-height:1.5rem;

  }
  .mo .mo-p{
    width:15rem;
    height:1rem;
    color:#666;
    font-size:14px;
   margin-top:0.4rem;
    margin-bottom:1rem;
  }
  .mo span{
    color:#333;
  }
  .mo .sp1{
    font-size:14px;
    color:#666;
  }
  .mo .mo-d{
    width:15rem;
    border-top:1px solid #ccc;
    margin-top:0.6rem;
    position:relative;

  }
  .mo .mo-d span{
    font-size:14px;
  }
  .mo .mo-d button{
    border:1px solid #ccc;
    width:1.5rem;
    height:1.5rem;
    line-height:1.5rem;
    text-align:center;
    margin-top:0.2rem;
    background:#fff;

  }
  .mo .mo-d strong{
    width:1.4rem;
    height:1.4rem;
    line-height:1.4rem;
    text-align:center;
    display:block;
    border:1px solid #ccc;
    margin-left:1.5rem;
    margin-top:-1.5rem;

  }

  .mo .mo-d .btn-d{
    position:relative;
  }
  .mo .mo-d .btn-d span{
    width:5rem;
    height:1.5rem;
    line-height:1.5rem;
    font-size:16px;
    position:absolute;
    top:0.3rem;
    left:4.8rem;
  }
  .mo .mo-d .btn{
    position:absolute;
    top:0;
    left:3rem;

  }
  .mo .mo-d p{
    width:15rem;
    background:red;
    line-height:2rem;
    text-align:center;
    margin-top:1rem;
    color:#fff;
  }
  .ban{
    width:16rem;
    height:auto;
    /* background:red;*/
    margin-top:0.5rem;
  }
  .ban ul{
    margin:0.5rem;
    width:15rem;

  }
  .ban ul li{
    width:15rem;
    height:11.5rem;
    margin-top:2rem;
    margin-left:-0.5rem;
    text-align:center;

  }
  .ban ul li .img1{
    width:15rem;
    height:6rem;
  }
  .ban ul li img{
    width:10rem;
  }
  .ban h3{
    margin-left:0.5rem;
    color:#333;
  }
  .mo-d .add{

    width:13rem;
    line-height:3rem;
    margin-top:0.5rem;
    font-size:16px;
    border:1px solid #ccc;
  }
  .mo-d .add span{
          margin-left:1rem;
       display:inline-block;
  }
  .mo-d .add span:nth-of-type(2){
      background:red;
       width:4rem;
      height:1.5rem;
      line-height:1.5rem;
       text-align:center;
    border-radius:0.3rem;


  }
  .mo-d .add span:nth-of-type(2) a{
    color:#fff;
  }
</style>
