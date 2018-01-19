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
        <li class="last">
          <span>密码</span>
          <input type="password" placeholder="请输入密码">
        </li>
        </ul>
        <p>登录</p>
        <div class="remember">
          <a class="a1" href="">忘记密码?</a>
          <a class="a2" href="">立即注册</a>
        </div>
      </div>

      <div class="footer">
        <img src="../assets/deng.png" alt="">
      </div>

    </div>
</template>

<script>
    export default {
        name: "login"
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
    font-size:18px;
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
  margin:1rem auto;
}
  .form .remember{
    width:14.5rem;
    margin:-0.5rem auto;
  }
.form .remember a{
  text-decoration: none;
  font-size:16px;
}
.form .remember a.a1{
  float:left;
}
.form .remember a.a2{
  float:right;
}
  .footer{
    margin-top:2rem;
    text-align:center;
  }
</style>
