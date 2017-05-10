<template>
  <div class="main">
    <div class="admin-info clearfix">
      <div class="info-avatar f-l">
        <img src="../assets/img/avatar.jpg" alt="">
      </div>
      <div class="info-text f-l">
        <h2>管理员：{{ userName }}</h2>
        <div class="data">
          <span>255<i>文章</i></span>
          <span>1024<i>访客</i></span>
          <span>1024<i>评论</i></span>
        </div>
      </div>
    </div>
    <div class="link">
      
    </div>
  </div>
</template>
<script>
export default {
  computed: {    
    userName() {
      let username = localStorage.getItem('userName')
      return username ? username : ''
    },
  },
  created() {
    this.$store.commit('modifyState', {
      key: 'currentPathName',
      value: ''
    })

    this.$store.commit('modifyState', {
      key: 'currentPathNameParent',
      value: ''
    })
  }
}
</script>
<style scoped>
.main {
  padding-left: 30px;
}
.info-avatar {
  width: 150px;
  padding: 5px;
  border: 1px solid #000;
  overflow: hidden;
  font-size: 0px;
}
.info-avatar img {
  width: 100%;
}
.info-text {
  line-height: 2;
  color: #212121;
  padding-left: 50px;
}
.info-text h2 {
  font-size: 48px;
}
.info-text span {
  font-size: 24px;
  padding-right: 100px;
}
.info-text i {
  color: #727272;
  font-size: 14px;
  padding-left: 5px;
}
</style>