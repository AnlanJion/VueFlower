<template>
    <div class="box">
      <div class="header">
          <input type="text" value="搜索全店">

          <img class="pic1" src="//asset.ibanquan.com/asset/58a427060dd76c0ce4000f6e/logo?v=1487152902" alt="">
          <div class="header-r">
            <p>
              <i class="iconfont">&#xe61b;</i>
              <span>0</span>
            </p>
            <span>☷</span>
          </div>
        </div>

      <!--<Nav></Nav>-->


      </div>
</template>

<script>
    export default {
        name: "all-shop"
    }
</script>

<style scoped>
  .box{
    position:relative;
    top:-2.4rem;
  }
  .header {
    width:16rem;
    height: 2.4rem;
    position:relative;
    background:#666;


  }
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


</style>
