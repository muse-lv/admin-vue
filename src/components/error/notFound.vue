<template>
  <div class="not-found">
    <p>出错了，找不到页面</p>
    <el-button type="primary" @click='back'>返回上一页</el-button>
  </div>
</template>
<script>
export default {
  data() {
      return {

      }
    },
    methods: {
      back() {
        this.$router.go(-1)
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

.not-found {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: center;
}
</style>