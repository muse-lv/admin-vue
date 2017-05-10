<template>
  <div class="header clearfix">
    <div class="header-left" @click="toIndex">
      <img src="../../../assets/img/logo.png" class="logo"> <span>后台管理系统</span>
    </div>
    <div class="header-right">
      <el-tooltip class="item tip-logout" effect="dark" content="退出" placement="bottom">
        <i class="icon-signout icon-large logout" aria-hidden="true" @click="logout"></i>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
import layer from '@/assets/js/layer'
import request from '@/assets/js/request'

export default {
  methods: {
    logout() { 	
    	layer.confirm('提示', '您确认退出账号吗?', () => {
        this.$router.replace('/login')
        localStorage.removeItem('userName')
    	})
    },
    toIndex() {
      this.$router.push('/index')
    }
  }
}

</script>
<style scoped>
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #1F2D3D;
  color: #c0ccda;
}

.header-left {
  font-size: 20px;
  float: left;
  color: #20a0ff;
  cursor: pointer;
}
.header-left span {
  padding-left: 10px;
}

.logo {
  width: 40px;
  height: 40px;
  float: left;
  margin: 10px 10px 10px 18px;
}

.header-right {
  float: right;
}

.logout {
  cursor: pointer;
  margin-top: 20px;
}

.tip-logout {
  float: right;
  margin-right: 20px;
  padding-top: 5px;
}

.tip-logout i {
  cursor: pointer;
}
</style>