<template>
  <div class="inline-block">
    <sy-edit-btn @click="open"></sy-edit-btn>
  </div>
</template>
<script>
import syEditBtn from '@/components/public/syEditBtn/main'
import bus from '@/assets/js/bus.js'
import request from '@/assets/js/request'
import layer from '@/assets/js/layer'

export default {
  components: {
    syEditBtn
  },
  created() {

    bus.$off('edit-opt')

    bus.$on('edit-opt', (formData) => {
      bus.$emit('dialog-close')
      bus.$emit('reload-opt', formData.parentId)
      layer.success('编辑成功')
      bus.$emit('form-loading')
    })

  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    open() {
      bus.$emit('dialog-open', this.item)
    }
  }
}
</script>
<style>
</style>