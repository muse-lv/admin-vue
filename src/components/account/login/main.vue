<template>
  <div class="login-form">
    <div class="top-login">
      <span>
      	<img src="./img/group.png" alt=""/>
      </span>
    </div>
    <h1>后台管理系统</h1>
    <el-form :model="loginform" :rules="rules" ref="loginform" label-position="left" label-width="0px" class="card-box loginform">
      <div class="login-top">
        <el-form-item prop="account">
          <div class="login-ic">
            <i class="icon icon-user"></i>
            <el-input type="text" auto-complete="off" placeholder="账号" v-model="loginform.account"></el-input>
            <div class="clear"> </div>
          </div>
        </el-form-item>
        <el-form-item prop="checkPass">
          <div class="login-ic">
            <i class="icon icon-lock"></i>
            <el-input type="password" auto-complete="off" placeholder="密码" v-model="loginform.checkPass"></el-input>
            <div class="clear"> </div>
          </div>
        </el-form-item>
        <div class="log-bwn">
          <el-button type="primary" @click.native.prevent="login">登录</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
import layer from '@/assets/js/layer'
import request from '@/assets/js/request'
import bus from '@/assets/js/bus'
import mock from '@/assets/js/mock'

export default {
  data() {
      return {
        url: "",
        loginform: {
          account: 'admin',
          checkPass: '123',
          verCode: "",
          codeSrc: ''
        },
        rules: {
          account: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }, ],
          checkPass: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }, ],
          verCode: [{
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }]
        },
        checked: true
      };
    },
    methods: {
      imgChange(e) {
        this.loginform.codeSrc = this.loginform.codeSrc + '?' + Math.random()
      },
      login() {
        this.$refs.loginform.validate((valid) => {
          if (valid) {
            request.submit('/login', {
              username: this.loginform.account,
              password: this.loginform.checkPass,
              captcha: this.loginform.verCode
            }, (res) => {
              localStorage.setItem("userName", this.loginform.account)
              this.$router.push('/index')
            }, (res) => {
            })
          }
        })
      },
      clickEnter() {
        document.onkeyup = (event) => {
          event = event || window.event || arguments.callee.caller.arguments[0]
          if (event && event.keyCode === 13) {
            this.login()
          }
        }
      }
    },
    created() {
      this.loginform.codeSrc = this.$apiPrefix + '/captcha'
      this.imgChange()
      this.clickEnter()
    }
}
</script>
<style>
.clear {
  clear: both;
}

.login-form {
  padding: 50px 0px 50px 0;
  width: 100%;
}

.login-form h1 {
  font-size: 2em;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2em;
}

.top-login {
  width: 130px;
  height: 130px;
  display: block;
  -webkit-transform: rotate(45deg) translate3d(0, 0, 0);
  -moz-transform: rotate(45deg) translate3d(0, 0, 0);
  -ms-transform: rotate(45deg) translate3d(0, 0, 0);
  -o-transform: rotate(45deg) translate3d(0, 0, 0);
  transform: rotate(45deg) translate3d(0, 0, 0);
  margin: 0 auto 4em;
  background: #fff;
  position: relative;
}

.top-login span {
  border: 2px solid #20a0ff;
  width: 105px;
  height: 105px;
  display: block;
  margin: 0px auto;
  position: absolute;
  top: 11px;
  left: 11px;
}

.top-login span img {
  -webkit-transform: rotate(-45deg) translate3d(0, 0, 0);
  -moz-transform: rotate(-45deg) translate3d(0, 0, 0);
  -ms-transform: rotate(-45deg) translate3d(0, 0, 0);
  -o-transform: rotate(-45deg) translate3d(0, 0, 0);
  transform: rotate(-45deg) translate3d(0, 0, 0);
  margin: 20px 0 0 20px;
}

.login-top {
  width: 460px;
  display: block;
  margin: 0 auto;
}

.login-ic {
  background: #fff;
  margin-bottom: 10px;
  padding: 8px;
  position: relative;
}

.login-ic i {
  width: 38px;
  height: 38px;
  float: left;
  color: #324057;
  position: relative;
  top: 4px;
  display: inline-block;
  font-size: 24px;
  text-align: center;
  vertical-align: bottom;
}

.login-form .el-input {
  width: 82%;
  float: left;
}

.login-form .el-input .el-input__inner {
  background: none;
  outline: none;
  font-size: 15px;
  font-weight: 400;
  color: #000;
  padding: 10px 16px;
  border: none;
  border-radius: 0;
  border-left: 1px solid #fff;
}

.login-form .ver-code {
  position: absolute;
  top: 60%;
  right: 10px;
  transform: translate(0, -50%);
}

.log-bwn {
  text-align: center;
}

.login-remember-pass {
  margin-bottom: 20px;
}

.login-remember-pass .el-checkbox__label {
  color: #fff;
}

.log-bwn button {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  padding: 13px 0;
  display: inline-block;
  width: 100%;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
}

.log-bwn input[type="submit"]:hover {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  border: 2px solid #fff;
}

p.copy {
  color: #fff;
  font-size: 1em;
  text-align: center;
  margin-top: 6em;
}

p.copy a {
  color: #fff;
  text-decoration: underline;
}

p.copy a:hover {
  text-decoration: none;
}

.login-address {
	text-align: center;
	margin-top: 10px;
	color:#fff;
}

@media (max-width:1024px) {
  p.copy {
    margin-top: 3.5em;
  }
  .login-form {
    padding: 60px 0px 40px 0px;
  }
}

@media (max-width:768px) {
  body {
    min-height: 929px;
  }
}

@media (max-width:768px) {
  body {
    min-height: auto;
  }
}

@media (max-width:600px) {
  .login-top {
    width: 425px;
  }
  .login-ic input[type="text"],
  .login-ic input[type="password"] {
    width: 79%;
  }
}

@media (max-width:480px) {
  p.copy {
    font-size: 0.9em;
    padding: 0 0.5em;
    line-height: 1.8em;
  }
}

@media (max-width:450px) {
  .login-top {
    width: 360px;
  }
  .login-ic input[type="text"],
  .login-ic input[type="password"] {
    width: 76%;
  }
  .top-login {
    width: 90px;
    height: 90px;
    margin: 0 auto 3em;
  }
  .top-login span img {
    margin: 5px 0 0 5px;
  }
  .top-login span {
    width: 75px;
    height: 75px;
    top: 5px;
    left: 5px;
  }
  .login-form h1 {
    margin-bottom: 1em;
    font-size: 1.7em;
  }
  p.copy {
    margin-top: 3em;
  }
  .login-form {
    padding: 80px 0px 45px 0px;
  }
  .login-ic {
    margin-bottom: 1em;
    padding: 3px;
  }
  .log-bwn input[type="submit"] {
    padding: 10px 0;
  }
  p.copy {
    font-size: 0.8em;
  }
}

@media (max-width:384px) {
  .login-top {
    width: 340px;
  }
  .login-ic input[type="text"],
  .login-ic input[type="password"] {
    width: 75%;
  }
}

@media(max-width:320px) {
  .login-top {
    width: 280px;
  }
  .login-ic input[type="text"],
  .login-ic input[type="password"] {
    width: 70%;
  }
  .login-form {
    padding: 50px 0px 45px 0px;
  }
}
</style>