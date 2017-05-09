<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import resetStyle from '@/assets/css/reset.css'
import publicStyle from '@/assets/css/public.css'
import animate from '@/assets/css/animate.css'

export default {
  name: 'app',
  created: function() {}
}
</script>
<style>
@import '../static/css/font-awesome.css';
.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-out .2s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

body {
  margin: 0px;
  padding: 0px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  font-weight: 400;
  background: url(../static/img/bg.jpg) no-repeat center center fixed;
  background-size: cover;
  -webkit-font-smoothing: antialiased;
}

#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}

.el-submenu [class^=fa] {
  vertical-align: baseline;
  margin-right: 10px;
}

.el-menu-item [class^=fa] {
  vertical-align: baseline;
  margin-right: 10px;
}
</style>