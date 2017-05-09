<template>
  <div class="server-error">
    <p>服务器异常，请稍后/(ㄒoㄒ)/~~</p>
    <el-button type="primary" @click='back'>返回上一页</el-button>
    <el-button @click='backToLogin'>回到登录页</el-button>
  </div>
</template>
<script>
import request from '@/assets/js/request'
export default {
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    backToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
p {
  font-size: 20px;
  margin-top: 30px;
  padding: 20px 0;
}

.server-error {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: center;
}
</style>