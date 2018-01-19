<template>
  <div class="head">
    <div class="header">

    </div>
    <div class="form">
      <ul class="form-u">
        <li>
          <span>账号</span>
          <input type="text" placeholder="手机/用户名/邮箱">
        </li>
        <li>
          <span>设置密码</span>
          <input type="password" placeholder="请输入密码">
        </li>
        <li class="last">
          <span>确认密码</span>
          <input type="password" placeholder="请确认密码">
        </li>
      </ul>
      <p>注册</p>
      <div class="remember">
        <span>已有账号？请</span>
        <a href="">直接登录</a>
      </div>
    </div>

    <div class="footer">
      <img src="../assets/deng.png" alt="">
    </div>

  </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>
  .head{
    height:39rem;
    background:#eeeff0;
  }
  .header{
    width:16rem;
    height:2.4rem;
    background:#eeeff0;
    position:fixed;
    top:0;
  }
  .form{
    width:16rem;
    height:8.2rem;
  }
  .form .form-u{
    width:16rem;
    height:3rem;
  }
  .form .form-u li{
    width:15rem;
    height:1.5rem;
    line-height:1.5rem;
    border-bottom:1px solid #ccc;
    margin:0 0.5rem;
    font-size:16px;
    background:#fff;
  }
  .form .form-u li.last{
    border-bottom:0;

  }
  .form .form-u li span{
    margin-left:0.5rem;
    letter-spacing: 3px;
  }
  .form .form-u li input{
    width:7rem;
    height:1rem;
    outline:none;
    font-size:16px;
    border:0;
    margin-left:0.5rem;
  }
  .form p{
    width:14.5rem;
    height:1.5rem;
    background:#d40f0f;
    line-height:1.5rem;
    text-align:center;
    color:#fff;
    font-size:18px;
    margin:2.5rem auto;
  }
  .form .remember{
    width:14.5rem;
    font-size:16px;
    color:#666;
    margin:-1.5rem auto;
  }
  .form .remember a{
    color:deepskyblue;
  }
  .footer{
    margin-top:3rem;
    text-align:center;
  }
</style>
