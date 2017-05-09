<template>
    <el-tooltip :content="content" :placement="placement">
        <el-button size="small" type="success" icon="plus" @click="handleClick" ></el-button>
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
            default: "新增"
          },
          placement: {
            type: String,
            default: "top"
          }
      }
    }
</script>