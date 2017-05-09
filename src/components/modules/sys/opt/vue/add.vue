<template>
  <div class="pt-10 pb-10 t-r">
    <sy-add-btn @click="open"></sy-add-btn>
  </div>
</template>
<script>
import request from '@/assets/js/request'
import layer from '@/assets/js/layer'
import bus from '@/assets/js/bus.js'
import syAddBtn from '@/components/public/syAddBtn/main'

export default {
  created() {
      bus.$off('add-opt')
      bus.$on('add-opt', (formData) => {
          bus.$emit('dialog-close')
          bus.$emit('reload-opt', formData.parentId)
          layer.success('新增成功')
          bus.$emit('form-loading')
      })
    },
    components: {
      syAddBtn
    },
    props: {
      parentId: {
        type: [String, Number]
      }
    },
    methods: {
      open() {
        if (this.parentId) {
          bus.$emit('dialog-open', null)
        } else {
          layer.warning('请选择权限')
        }
      }
    }
}
</script>