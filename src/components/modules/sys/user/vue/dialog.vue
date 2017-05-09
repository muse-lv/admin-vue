<template>
  <el-dialog :title="title" v-model="show" size="tiny" @close='cancel' close-on-click-modal close-on-press-escape>
    <el-form id="#form" :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="用户名" prop="userName" class="fromItem">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="realName" class="fromItem">
        <el-input v-model="form.realName"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender" class="fromItem" required>
        <el-radio-group v-model="form.gender" >
          <el-radio class="radio" label="1">男</el-radio>
          <el-radio class="radio" label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="密码" prop="userPass" class="fromItem">
        <el-input v-model.number="form.userPass" :placeholder="placeholder"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="mobile" class="fromItem" required>
        <el-input v-model.number="form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" class="fromItem" required>
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="是否启用" prop="dataStatus" class="fromItem" required>
        <el-switch v-model="form.isValid" on-color="#13ce66" off-color="#ff4949" @change="switchChange"></el-switch>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">关 闭</el-button>
      <el-button type="primary" :loading="submitLoading" @click="submit('form')">保 存</el-button>
    </div>
  </el-dialog>
</template>
<script>
import request from '@/assets/js/request.js'
import bus from '@/assets/js/bus.js'
import rules from '@/assets/js/rules.js'
import layer from '@/assets/js/layer.js'
export default {
  data() {
      return {
        title:"",
        placeholder:"",
        submitLoading: false,
        show: false,
        recId:"",
        operateApi: "/sys/user/",
        roleApi: "/sys/user/tree",
        orgOptions:[], 
        defaultProps:{
          label:'nodeName',
          value:'recId'
        },
        form: {
          orgId:"",
          orgPath: [],
          userName: "",
          realName: "",
          userPass: "",
          gender: "",
          mobile: "",
          email: "",
          dataStatus: 1,
          isValid: true
        },
        rules: {
          orgPath: [],
          userName: [{
            required: true,
            message: '请输入用户名'
          },{
            max: 30,
            message: '用户名最长为30个字符'
          }],
          realName: [{
            required: true,
            message: '请输入姓名'
          },{
            max: 30,
            message: '姓名最长为30个字符'
          }],
          gender: [{
            required: true,
            message: '请选择性别',
            trigger: 'change'
          }],
          userPass: [],
          mobile: [{
            validator: rules.checkMobile,
            trigger: 'blur'
          }],
          email: [{
            validator: rules.checkEmail,
            trigger: 'blur'
          }]
        },
      }
    },
    props: {
    },
    methods: {
      switchChange(val) {
        if (val) {
          this.form.dataStatus = 1
        } else {
          this.form.dataStatus = 2
        }
      },
      //重置
      reset() {
        this.form = {
          orgId:"",
          orgPath: [],
          userName: "",
          realName: "",
          userPass: "",
          gender: "",
          mobile: "",
          email: "",
          dataStatus: 1,
          isValid: true
        }
        this.$refs.form.resetFields()  
        this.placeholder = ""      
        this.submitLoading = false
      },
      cancel() {
        this.show = false
        this.reset()
      },
      submit(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.submitLoading = true
            if( this.title === "新增") {
              let index = this.form.orgPath.length - 1
              this.form.orgId = this.form.orgPath[index]
              request.addRecord(this.operateApi, this.form, (res) => {
                bus.$emit('reloadTable')
                this.submitLoading = false
                this.show = false
                layer.success('新增成功')
              },(res) => {
                this.submitLoading = false
              })
              return
            }

            if( this.title === "编辑") {
              let index = this.form.orgPath.length - 1
              this.form.orgId = this.form.orgPath[index]
              request.updateRecord(this.operateApi + this.recId, "", this.form,(res) => {
                bus.$emit('reloadTable')
                this.submitLoading = false
                this.show = false
                layer.success('编辑成功')
              },(res) => {                
                this.submitLoading = false
              })
              return
            }
          }
        })
      }
    },
    created() {
      //触发新增
      bus.$off('dialog-add')
      bus.$on('dialog-add', (data) => {
        
        this.show = true
        this.title = data.title 
      })
      //触发编辑
      bus.$off('dialog-edit')
      bus.$on('dialog-edit', (data) => {
        this.placeholder = "在需要修改密码时输入密码"
        
        request.getList(this.operateApi + data.recId,{},(res) => {  
          let user = res.data.user 
          this.form = {
            orgId:"",
            orgPath: user.orgPath,
            userName: user.userName,
            realName: user.realName,
            userPass: user.userPass,
            gender: user.gender + '',
            mobile: user.mobile,
            email: user.email,
            dataStatus: user.dataStatus,
            isValid: true
          }
          if(user.dataStatus === 1){            
            this.form.isValid = true
          }else {
            this.form.isValid = false
          }
          this.title = data.title
          this.recId = data.recId
          this.show = true
        })
      })
    }
}
</script>
<style>
.fromItem {
  width: 100%;
  margin-right: 10px;
}

.el-cascader {
  width: 100%;
}
</style>
