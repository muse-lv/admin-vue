<template>
  <div class="main">
    <h1>欢迎来到后台管理平台</h1>
  </div>
</template>
<script>
export default {
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
h1 {
  text-align: center;
  font-size: 20px;
}
</style>