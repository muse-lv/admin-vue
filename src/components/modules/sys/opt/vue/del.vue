<template>
  <div class="inline-block">
    <sy-delete-btn @click="deleteRecord"></sy-delete-btn>
  </div>
</template>

<script>

import syDeleteBtn from '@/components/public/syDeleteBtn/main'
import bus from '@/assets/js/bus.js'
import request from '@/assets/js/request'
import layer from '@/assets/js/layer'
import del from '@/components/public/syDeleteBtn/js/del'

export default {
  components: {
    syDeleteBtn
  },
  props: {
  	item: {
  		type: Object
  	},
    parentId: {
      type: [String, Number]
    }
  },
  methods: {
  	deleteRecord () {
  		del(this.item, '/sys/opt/', 'permissionName', ()=> {
        bus.$emit('reload-opt', this.parentId)
      })
  	}
  }
}

</script>
