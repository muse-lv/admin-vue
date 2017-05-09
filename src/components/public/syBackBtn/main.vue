<template>
  <el-tooltip :content="content" :placement="placement">
    <el-button size="small" icon="arrow-left" @click="handleClick"></el-button>
  </el-tooltip>
</template>
<script>
export default {
  name: "syBackBtn",
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },
  props: {
    content: {
      type: String,
      default: "返回"
    },
    placement: {
      type: String,
      default: "top"
    }
  }
}
</script>