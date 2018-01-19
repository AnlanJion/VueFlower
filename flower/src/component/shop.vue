<template>
<div>

  <div class="box">

    <div class="header">
      <input type="checkbox" id="span1" @click="check()">
      <div class="sp">
        <span>全选</span>
        <span class="sp2">删除</span>
        <span class="sp1">清除下架商品</span>
      </div>
    </div>
    <div class="center"  v-for="(data,index) in this.array">
      <input type="checkbox" class="span2">
      <img :src="data.DLimg" alt="">
      <span class="sp1">{{data.name}}</span>
      <div class="right">
        <span>{{data.price}}</span>
        <span class="right-s" @click="del(data,index)">删除</span>
        <ul>
          <li @click="reduce(data)">-</li>
          <li>{{data.num}}</li>
          <li @click="add(data)">+</li>
        </ul>
      </div>
    </div>
    <div class="jiage">
      <h1>所有商品价格 ￥{{aaa}}</h1>
      <h1>去结算</h1>
    </div>
  </div>
</div>
</template>

<script>
  import Json from './json.json';
  import Qq from './car.js';
 /*  import Vm from '../components/aa.js';*/
    export default {
        name: "shop",
      data(){
          return{
            obj:[],
            array:[],
            aaa:0,

          }
      },
      methods:{
      reduce(data){
        if(data.num==1){
          data.num=1
        }else{
          data.num--
          this.aaa=data.num*data.price
        }

      },
        add(data){
            data.num++
          this.aaa=data.num*data.price
        },
        del(data,index){
            // for(var i=0;i<Qq.length;i++){
            //   for(var c in Qq[i]){
            //     if(Number(Qq[i][c])==Number(data.index)){
            //       Qq.splice(i,1);
            //     }
            //   }
            // }
          this.array.splice(index,1);
          data.num=1;
        },
        check(){
          let span1 = document.getElementById('span1');
          let span2 = document.getElementsByClassName('span2')

          if (span1.checked) {
            for (let i = 0; i < span2.length; i++) {
                 span2[i].checked = true;
              }
            } else {
              for (let i = 0; i < span2.length; i++) {
                span2[i].checked = false;
              }
           }
          for (let i = 0; i < span2.length; i++) {
            span2[i].onclick = function () {
              if (!this.checked) {
                span1.checked = false
              } else {
                let flag = true;
                for (let j = 0; j < span2.length; j++) {
                  if (!span2[j].checked) {
                    flag = false;
                    span1.checked = false;
                  }
                }
                if (flag) {
                  span1.checked = true;
                }
              }
            }
          }
        }
        },
      mounted(){
        let _this = this;
        _this.obj =Json.data[2].gamedata;
        for(let attr in this.obj) {
          if (this.$route.query.name == this.obj[attr].name) {
            Qq.push(this.obj[attr]);
            this.array = Qq;
          }
        }

      }
    }
</script>

<style scoped>
  .box{
    width:16rem;
    height:100%;
    background:#eeeff0;
    position:fixed;
    top:0;
    z-index:300;
  }
.header{
  width:16rem;
  line-height:1.5rem;
  font-size:16px;
  border-bottom:1px solid #ccc;

}
  .header input{
    width:1.5rem;
    height:1.5rem;
    margin-top:0.5rem;
    margin-left:0.5rem;


  }
  .header .sp{
    width:13.2rem;
    margin-left:2.3rem;
    margin-top:-2rem;
  }
  .header .sp .sp1{
    float:right;
  }
  .header .sp .sp2{
    margin-left:0.5rem;
  }
  .center{
      border:1px solid #ccc;
    width:16rem;
    height:5rem;

    position:relative;
  }
  .center input{
    width:1.5rem;
    height:1.5rem;
    margin-top:1rem;
    margin-left:0.5rem;
  }
  .center img{
    width:3rem;
    height:3rem;
    margin-top:-1rem;
  }
  .center .sp1{

    font-size:14px;
    position:absolute;
    top:0;
  }
  .center .right{
    float:right;
    width:6rem;
    height:5rem;

  }
  .center .right span{

    text-align:center;
    font-size:14px;
    display:block;
    margin-left:2.5rem;

  }
  .center .right .right-s{
    margin-left:4rem;
    margin-top:0.5rem;

  }
  .center .right ul{
    width:4.7rem;
    height:1.5rem;
    margin-top:1rem;
    margin-left:0.8rem;
    border:1px solid #ccc;


  }
  .center .right ul li{
    width:1.5rem;
    height:1.5rem;
    text-align:center;
    float:left;
    border-right:1px solid #ccc;

  }
  .box .jiage{
    width:15rem;
    height:5.5rem;
    margin-top:1rem;
    border:1px solid #ccc;
    margin-left:0.5rem;

  }
  .box  .jiage h1{
    width:13rem;
    height:1.5rem;
    text-align:center;
    font-size:18px;
    line-height:1.5rem;
    margin:1rem auto;

  }
  .box  .jiage h1:last-child{
    background:red;
    color:#fff;
  }
</style>
