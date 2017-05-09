<template>
  <div class="inline-block add-user t-r">
    <sy-add-btn  @click="add"></sy-add-btn>
  </div>

</template>

<script>
  import request from '@/assets/js/request.js'
  import bus from '@/assets/js/bus.js'
  import layer from '@/assets/js/layer.js'
  import syAddBtn from '@/components/public/syAddBtn/main'
  export default {
    components:{
      syAddBtn
    },
    data() {
      return {
        operateApi: "/sys/user/"
      }
    },
    props: {
    },
    methods: {
      add() {
        bus.$emit("dialog-add",{ "title" : "新增" })
      }
    }
  }
</script>
<style scoped>
  /*.add-user {
    margin-top: 10px;
  }*/
</style>