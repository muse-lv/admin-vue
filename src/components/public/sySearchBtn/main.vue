<template>
    <el-tooltip :content="content" :placement="placement">
        <el-button size="small" type="primary" icon="search" @click="handleClick"></el-button>
    </el-tooltip>
</template>
<script>
    export default {
      name:"syAddBtn",
      methods: {
        handleClick(evt) {
          this.$emit('click', evt);
        }
      },
      props: {
          content:{
              type: String,
              default: "搜索"
          },
          placement: {
              type: String,
              default: "top"
          }
      }
    }
</script>