<template>
  <div class="wrap">
    <sy-header></sy-header>
    <div class="content">
      <sy-menu></sy-menu>
      <sy-content></sy-content>
    </div>
    <sy-footer></sy-footer>
  </div>
</template>
<script>
import request from '@/assets/js/request'
import bus from '@/assets/js/bus'

import syHeader from '@/components/layout/vue/header' // 头部
import syFooter from '@/components/layout/vue/footer' // 底部
import syMenu from '@/components/layout/vue/menu' // 菜单
import syContent from '@/components/layout/vue/content' // 路由内容


export default {
  components: {
    syHeader,
    syFooter,
    syMenu,
    syContent
  }
}
</script>
<style scoped>
.wrap {
  height: 100%;
  overflow: hidden;
}

.content {
  width: 100%;
  overflow: hidden;
  height: calc(100% - 120px);
}
</style>