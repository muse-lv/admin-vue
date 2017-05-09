<template>
    <el-tooltip :content="content" :placement="placement">
        <el-button size="small" type="warning" icon="document" @click="handleClick" ></el-button>
    </el-tooltip>
</template>
<script>
    export default {
      name:"syAddBtn",
      methods: {
        handleClick(evt) {
          this.$emit('click', evt)
        }
      },
      props: {
          content:{
            type: String,
            default: "复制"
          },
          placement: {
            type: String,
            default: "top"
          }
      }
    }
</script>