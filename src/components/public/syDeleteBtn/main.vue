<template>
  <el-tooltip :content="content" :placement="placement">
    <el-button size="small" type="danger" icon="delete2" @click="handleClick"></el-button>
  </el-tooltip>
</template>
<script>
export default {
  name: "syDeleteBtn",
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },
  props: {
    content: {
      type: String,
      default: "删除"
    },
    placement: {
      type: String,
      default: "top"
    }
  }
}
</script>