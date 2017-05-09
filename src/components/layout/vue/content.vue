<template>
 
  <div class="router">
    <div class="clearfix router-wrap">
      <strong class="router-title"> {{currentPathName}} </strong>
      <el-breadcrumb separator="/" class="router-path">
        <el-breadcrumb-item :to="{ path : '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentPathNameParent!=''"> {{currentPathNameParent}} </el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentPathName!=''"> {{currentPathName}} </el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentOperation!=''"> {{currentOperation}} </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="router-view" id="sy-view">

       <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      
    </div>
  </div>
 
</template>
<script>
	export default {
		computed: {
			currentPathName () {
				return this.$store.getters.getCurrentPathName
			},
			currentPathNameParent () {
				return this.$store.getters.getCurrentPathNameParent
			},
      currentOperation () {
        let operation = this.$route.params.operation
        let operationName = ''
        switch (operation) {
          case 'edit' :
          operationName = '编辑'
          break

          case 'detail' :
          operationName = '查看'
          break

          case 'add' :
          operationName = '新增'
          break

          case 'copy' :
          operationName = '复制'
          break

          default :
          operationName = ''
          break
        }
        return operationName
      }
		}	
	}
</script>
<style scoped>
	
.router {
  background: #f1f2f7;
  padding: 20px;
  width: calc( 100% - 240px);
  float: right;
  height: 100%;
  box-sizing: border-box;
}

.router-title {
  width: 200px;
  float: left;
  color: #475669;
}

.router-wrap {
  margin-bottom: 15px;
}

.router-path {
  float: right;
}

.router-view {
  background-color: #fff;
  box-sizing: border-box;
  padding: 22px 20px 5px 20px;
  overflow-y: scroll;
  height: calc(100% - 30px);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>