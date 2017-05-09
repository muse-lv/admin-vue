<template>
 
<footer class="footer">
  <p>© 2016-2017 暮色负离子 版权所有</p>
  <p>广东省广州市天河区</p>
</footer>
  
</template>

<script>

import request from '@/assets/js/request'
export default {
  computed: {
    globalConfig() {
      // return this.$store.getters.getGlobalConfig
    }
  },
  created() {
    // this.$store.dispatch('updateGlobalConfig')
  }
}
</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #1F2D3D;
  font-size: 14px;
  line-height: 1.5;
  color: #f1f1f1;
  padding: 9px;
  box-sizing: border-box;
  height: 60px;
  text-align: center;
  overflow: hidden;
}
</style>