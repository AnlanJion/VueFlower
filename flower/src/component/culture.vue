<template>
    <div class="box">

      <div class="first">
        <p><router-link to="/home">首页</router-link> > 所有文章</p>
      </div>

      <div class="con">
        <ul>
          <h1>所有文章</h1>
          <li v-for="data in this.msg">
            <img :src="data.img" alt="">
            <div class="ul-d">
              <h3>{{data.language}}</h3>
              <span>{{data.time}}</span>
              <p>{{data.write}}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="center">
        <h3>文章目录</h3>
        <ul>
          <li>所有文章</li>
          <li>茶的历史</li>
          <li>茶道</li>
          <li>茶文化</li>
        </ul>
        <h3 class="biao">文章标签</h3>
        <h4>历史</h4>
      </div>
    </div>
</template>

<script>
    export default {
        name: "culture",
      data(){
          return{
            msg:[
              {
                img:'http://asset.ibanquan.com/image/58a54dcbb1b95701b900149c/s_w204h144.jpeg?v=1487228529',
                language:'茶性清纯、幽雅、质朴的气质增强艺术感染力',
                time:'2017-02-16 15:02',
                write:'茶文化是包括茶叶品评技法和艺术操作手段的鉴赏，以及品茗美好环境的领略等整个品茶过程的美好意境其过程体现形式和精神的相互统一是饮茶活动过程中形成的文化现象。'

              },
              {
                img:'http://asset.ibanquan.com/image/58a54d469bedc4778c001416/s_w204h144.jpeg?v=1487228336',
                language:'在世界上的很多地方饮茶的习惯是从中国传过去的',
                time:'2017-02-16 14:58',
                write:'《茶经》卷下《六茶之饮》概为言之谓“茶之为饮发乎神农氏闻于鲁周公齐有晏婴汉有扬雄、司马相如吴有韦曜晋有刘琨、张载、远祖纳、谢安、左思之徒皆饮焉。”但多非史实。'
              },
              {
                img:'http://asset.ibanquan.com/image/58a54c810dd76c0ce0001500/s_w204h144.jpeg?v=1487228167',
                language:'中国是茶的故乡也是茶文化的发源地',
                time:'2017-02-16 14:58',
                write:'中国茶的发现和利用在中国已有四五千年历史且长盛不衰传遍全球。茶是中华民族的举国之饮，发于神农，闻于鲁周公，兴于唐朝，盛于宋代'


              }
            ]
          }
      }
    }
</script>

<style scoped>
  .box{
    width:16rem;
    height:40rem;
  }
  .first{
    width:16rem;
    height:2.275rem;
    line-height:2.275rem;
    font-size:14px;
    margin-top:1.8rem;

  }

  .first p{
    width:15.5rem;
    margin:0 0.5rem;
    color:#666;
    border-bottom:2px solid #ccc;
  }
   a{
    color:#000;
    text-decoration:none;
  }
.con{
    width:15rem;
    height:26rem;
    margin:0.5rem 0.5rem;
}
  .con ul{
    width:15rem;
    height:13.875rem;
  }
  .con ul h1{
    margin-left:0.5rem;
  }
  .con ul li{
    width:15rem;
    height:8rem;
    border-bottom:1px solid #ccc;
    margin-top:0.5rem;

  }
  .con ul li img{
    width:4.5rem;
    height:2.175rem;
  }
  .con ul li .ul-d{
    width:10rem;
    float:right;
    color:#666;
    font-size:18px;

  }
  .con ul li .ul-d h3{
    width:10rem;
    height:1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color:#333;
    text-align:center;

  }
  .con ul li .ul-d span{
    font-size:12px;
  }
  .con ul li .ul-d p{
    font-size:14px;
    margin-top:1rem;
  }
  .center{
    width:15rem;
    height:13rem;
    line-height:2rem;
    margin-left:0.5rem;
    margin-top:1rem;
  }
  .center h3{
    width:14rem;
    height:1.8rem;
    font-size:16px;
    margin-left:0.5rem;
    border-bottom:1px solid #ccc;
  }
  .center ul{
    width:15rem;
    height:6rem;
    font-size:16px;
  }
  .center ul li{
        width:13rem;
        height:1.5rem;
      line-height:1.5rem;
      list-style:disc;
    margin-left:2rem;

  }
  .center .biao{
        border-bottom:0;
  }
  .center h4{
    font-size:14px;
    margin-left:0.5rem;
  }
</style>
