<template>
  <!-- dialog start-->
  <el-dialog title="权限管理" v-model="isShow" size="tiny" @close="close">
    <!-- form start-->
    <el-form label-width="120px" ref="form" :rules="rules" :model="form">
      <el-form-item label="名称" prop="permissionName">
        <el-input v-model="form.permissionName"></el-input>
      </el-form-item>
      <el-form-item label="编码" prop="permCode">
        <el-input v-model="form.permCode"></el-input>
      </el-form-item>
      <el-form-item label="排序号" prop="sortNo">
        <el-input v-model="form.sortNo"></el-input>
      </el-form-item>
    </el-form>
    <!-- form end-->
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">关 闭</el-button>
      <el-button type="primary" @click="submit('form')" :loading="formLoading">保 存</el-button>
    </div>
  </el-dialog>
  <!-- dialog end-->
</template>
<script>
import bus from '@/assets/js/bus.js'
import rules from '@/assets/js/rules.js'
import request from '@/assets/js/request'

export default {
  data() {
      return {
        isShow: false,
        formLoading: false,
        form: {
          permissionName: '',
          permCode: '',
          sortNo: '',
          recId: ''
        },
        rules: {
          permissionName: [{
            required: true,
            message: '请输入正确的名称',
            trigger: 'blur',
            type: 'string'
          }],
          permCode: [{
            required: true,
            message: '请输入正确的编码',
            trigger: 'blur',
            type: 'string'
          }],
          sortNo: [{
            validator: rules.checkNumber,
            trigger: 'blur'
          }]
        },
        submitType: 'add'
      }
    },
    created() {

      bus.$off('dialog-open')

      // 打开弹窗
      bus.$on('dialog-open', (item) => {
        this.open(item)
      })

      bus.$off('dialog-close')

      // 关闭弹窗
      bus.$on('dialog-close', () => {
        this.close()
      })

      bus.$off('form-loading')

      // 关闭Loading
      bus.$on('form-loading', () => {
        this.formLoadingClose()
      })
    },
    props: {
      parentId: {
        type: [String, Number]
      }
    },
    methods: {
      
      formLoadingClose() {
        this.formLoading = false
      },

      switchChange(val) {
        if (val) {
          this.form.dataStatus = 1
        } else {
          this.form.dataStatus = 2
        }
      },

      open(item) {

        if (item === null) {
          this.isShow = true
          this.submitType = 'add'
        } else {

          this.submitType = 'edit'
          this.isShow = true
          this.form.permissionName = item.permissionName
          this.form.permCode = item.permCode
          this.form.sortNo = item.sortNo
          this.form.recId = item.recId

        }
      },

      close() {
        this.$refs['form'].resetFields()
        this.isShow = false
        this.form.permissionName = ''
        this.form.permCode = ''
        this.form.sortNo = ''
        this.form.recId = ''
      },

      submit(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid) {

            this.formLoading = true
            // 获取需要表单提交的数据
            let submitData = {
              permissionName: this.form.permissionName,
              parentId: this.parentId,
              permCode: this.form.permCode,
              sortNo: this.form.sortNo,
              recId: this.form.recId
            }

            if (this.submitType === 'add') {
              bus.$emit('add-opt', submitData)
            }

            if (this.submitType === 'edit') {
              bus.$emit('edit-opt', submitData)
            }


          }
        })

      }

    }
}
</script>