<template>
  <div class="inline-block">
    <sy-edit-btn @click= "edit"></sy-edit-btn>
  </div>

</template>

<script>
  import request from '@/assets/js/request.js'
  import bus from '@/assets/js/bus.js'
  import layer from '@/assets/js/layer.js'
  import syEditBtn from '@/components/public/syEditBtn/main'
  export default {
    components:{
      syEditBtn
    },
    data() {
      return {
      }
    },
    props: {
      row: Object
    },
    methods: {
      edit() {
        bus.$emit("dialog-edit",{"recId":this.row.recId,"title":"编辑"})
      }
    }
  }
</script>