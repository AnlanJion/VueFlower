<template>
    <div>
      <div class="box">
        <ul class="list">
          <li>
            <img class="img1" src="http://asset.ibanquan.com/image/58a434973f8f90757500103b/s.jpeg?v=1487156408" alt="">
            <div class="header-d">
              <img :src="this.img" alt="">
              <span>{{this.font}}</span>
              <span class="sp1">{{this.time}}</span>
            </div>
          </li>
          <li class="li-2">
            <img class="img2" src="../assets/3j.jpg" alt="">
            <p>
              <span>最美的太阳</span>
              <span class="sp2">最美的太阳-张杰</span>
            </p>
            <div class="header-d">
              <img :src="this.img" alt="">
              <span>{{this.font}}</span>
              <span class="sp1">{{this.time}}</span>
            </div>
          </li>
          <li>
            <img class="img1" src="http://asset.ibanquan.com/image/58a434973f8f90757500103b/s.jpeg?v=1487156408" alt="">
            <div class="header-d">
              <img :src="this.img" alt="">
              <span>{{this.font}}</span>
              <span class="sp1">{{this.time}}</span>
            </div>
          </li>
          <li class="last">
                <h2>当轻博客遇见电商，生意优雅有温度</h2>
                <div class="last-d">
                  欢迎使用友好速搭，你看到的这个版块是轻博客功能，它能让你更好地展示和传播你的理念。现在简单介绍下这个功能，你可以新建4种轻博客内容：文字博客图片博客音乐博客视频博客友好速搭轻博客作为独立网站的功能之一，它将是实现你轻流量入口的重要一步。我们意在为你营造一个温暖的氛围，和冷冰冰的电商说再见。在做优雅有温度的生意的同时，写下你的故事，分享你的心情。让店铺中的每一件商品都赋有鲜活的生命力。将你的故事心情、优美的图片、有共鸣的音乐以及心动的视频随时随地分享至微博或朋友圈等平台，会有更多的人看到你和你独立
                </div>
            <div class="header-d">
              <img :src="this.img" alt="">
              <span>{{this.font}}</span>
              <span class="sp1">{{this.time}}</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="footer">
        <p>关于我们<span>丨</span> 友情链接<span>丨</span> 联系我们<span>丨</span></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "kind",
      data(){
          return{
            img:'//asset.ibanquan.com/image/58a4332f9bedc4779000121c/s_w64h64.png?v=1487156037',
            font:'山水涧',
            time:'2017-02-15 23:00'
          }
      }
    }
</script>

<style scoped>
.box{
    width:16rem;
    height:auto;

}
  .box .list{
    width:15rem;
    height:auto;
    margin:0 auto;
  }
.box .list li{
  width:15rem;
  height:8rem;

  border:1px solid #ccc;

}
.box .list li .img1 {
  width: 13rem;
  height: 3.5rem;
  margin-top:1rem;
  margin-left:1rem;
}
.box .list li .header-d{
  width:13rem;
  height:2.5rem;
  margin-left:1rem;
  margin-top:0.5rem;
  border-top:1px solid #ccc;

}
.box .list li .header-d img{
  width:2rem;
  height:2rem;
  border-radius:100%;
  margin:0.25rem;

}
.box .list li .header-d span{
  font-size:16px;
  color:#333;
}
.box .list li .header-d span.sp1{
  color:#666;
  margin-left:1.6rem;
}
.box .list .li-2{
  height:10.5rem;
}
.box .list .li-2 .img2{
  width:6rem;
  height:6rem;
  margin:1rem;
}
.box .list .li-2 .header-d{
  margin-top:-0.5rem;
}
.box .list .li-2 p{
  font-size:16px;
  float:right;
  text-align:center;
  margin-top:2rem;
  margin-right:0.5rem;

}
.box .list .li-2 p span{
  display:block;
}
.box .list .li-2 p span.sp2{
  color:#666;
}
.box .list .last{
  height:14rem;
}
.box .list .last h2{
  font-size:18px;
  text-align:center;
  line-height:1.5rem;
}
.box .list .last .last-d{
  height:10rem;
  font-size:14px;
  color:#666;
}
.box .list .last .header-d{
  margin-top:-0.6rem;
}
  .footer{
    font-size:14px;
    color:#333;
    text-align:center;

  }
</style>
