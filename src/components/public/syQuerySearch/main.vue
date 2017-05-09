<template>
  <el-select  v-model="currentValue"
              ref="select"
              filterable 
              remote 
              :placeholder="placeholder" 
              :disabled="disabled" 
              :remote-method="remoteMethod" 
              :loading="loading" 
              @change="change">
    <el-option v-for="item in options" :key="item.recId" :label="item.shopName" :value="item.recId">
    </el-option>
  </el-select>
</template>
<script>
import request from '@/assets/js/request'
import layer from '@/assets/js/layer'
export default {

  data() {
      return {
        currentValue: this.value,
        options: [],
        loading: false
      }
    },
    props: {
      value: [String, Number],
      disabled: Boolean,
      placeholder: String,
      shopName: String
    },

    methods: {
      change(val) {
        this.currentValue = val
        this.$emit('input', val)
        this.$emit('change', val)
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.change', [val])
        }
      },
      //获取数据
      remoteMethod(query) {
        this.throttle(() => {
          request.getList('/shop/info/', {'name' : query}, (res) => {
            this.options = res.data
          })
        })
      },
      //节流
      throttle(method, context) {
        clearTimeout(method.tId)
        method.tId = setTimeout(function() {
          method.call(context)
        }, 300)
      },
      inputSelect() {
        this.$refs.input.select()
      }
    },
    watch: {
      shopName() {
        if( this.shopName.length > 0) {
          this.options = [{"shopName" : this.shopName , "recId" : this.value}]
          this.currentValue = this.value
        }
      }
    },
    created() {
      this.$on('inputSelect', this.inputSelect)
    }

}
</script>
