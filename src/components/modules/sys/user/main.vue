<template>
  <div class="user table-min-width">

    <div class="mb-20 clearfix">

      <div class="sy-input-box mr-15">
        <el-input placeholder="搜索关键字..." size="small" v-model="search.name"></el-input>
      </div>

      <div class="sy-button-box">
        <sy-search-btn @click="searchUser"></sy-search-btn>
      </div>

      <div class="f-r">
          <add v-if="perms.add"></add>
      </div>
      
    
    </div>

    <sy-table :api="userApi" :parameter="search" ref="pagination">
      <template scope="props">
        <el-table border :data="props.tabelData" element-loading-text="加载中..." v-loading="props.loading">
          <el-table-column type="index" width="75" label='序号' show-overflow-tooltip fixed align="center"></el-table-column>
          <el-table-column sortable prop="userName" label="用户名" width="120" show-overflow-tooltip fixed align="center"></el-table-column>
          <el-table-column sortable prop="realName" label="姓名" width="120" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column sortable prop="genderName" label="性别" width="100" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column sortable prop="roles" label="角色名称" width="200" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column sortable prop="mobile" label="手机" width='150' show-overflow-tooltip align="center"></el-table-column>
          <el-table-column sortable prop="email" label="邮箱" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column sortable prop="dataStatusName" label="是否启用" width="120" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column sortable prop="updateDateTime" label="更新时间" width="175" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column label="操作" width="150" show-overflow-tooltip align="center" fixed="right">
            <template scope="scope">
              <edit :row="scope.row" v-if="perms.edit"></edit>
              <sy-delete-btn @click="deleteUser(scope.row)" placement="top" v-if="perms.delete"></sy-delete-btn>
              <span></span>
              <sy-set-btn @click="setRole(scope.row)" placement="top" content="设置角色" v-if="perms.setrole"></sy-set-btn>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </sy-table>
    <!-- 设置角色 begin-->
    <el-dialog v-model="roleDialog" size="tiny" title="设置角色" @close="closeRole">
      <el-select v-model="roleData" multiple filterable placeholder="请选择" class="select">
        <el-option
          v-for="item in roleOptions"
          :label="item.roleName"
          :value="item.recId"
          :key="item.recId">
        </el-option>
      </el-select>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeRole">取 消</el-button>
        <el-button type="primary" :loading="formLoading" @click="submitRole">确定</el-button>
      </div>
    </el-dialog>
    <!-- 设置角色 end-->
    <user-dialog></user-dialog>
    <sy-back-top></sy-back-top>
  </div>
</template>
<script>
  import request from '@/assets/js/request.js'
  import perms from '@/assets/js/perms.js'
  import del from '@/components/public/syDeleteBtn/js/del.js'
  import syTable from '@/components/public/syTable/main'
  import add from './vue/add'
  import edit from './vue/edit'
  import userDialog from './vue/dialog'
  import syDeleteBtn from '@/components/public/syDeleteBtn/main'
  import sySetBtn from '@/components/public/sySetBtn/main'
  import sySearchBtn from '@/components/public/sySearchBtn/main'
  import syBackTop from '@/components/public/syBackTop/main'

export default {
  components: {
    syTable,
    add,
    edit,
    userDialog,
    syDeleteBtn,
    sySetBtn,
    sySearchBtn,
    syBackTop
  },
  data() {
    return {
      perms: {
        add: false,
        edit: false,
        delete: false,
        setrole: false
      },
      userApi: '/sys/user/list',
      operateApi: '/sys/user/',
      search: {
        name:""
      },
      currentId:"",
      parameter: {},
      roleOptions: [],
      roleData:[],
      loading:'',
      roleDialog:false,
      formLoading:false
    }
  },
  methods: {
    searchUser() {
      this.$refs.pagination.getData()
    },
    submitRole() {
      let url = this.operateApi + this.currentId + '/roles/'
      let data = this.roleData
      data = {
        "roleIds": data
      }
      request.addRecord(url, data, (res) => {
        this.$refs.pagination.getData()
        this.roleDialog = false
        this.$notify.success({
          title:'提示',
          message:'设置成功',
          duration:1500
        })
      })
    },
    setRole(item) {
      this.roleDialog = true
      this.currentId = item.recId
      let url = this.operateApi + item.recId + '/roles/'
      request.getList("/sys/role/all", {}, (res) => {
        this.roleOptions = res.data
        request.getList(url, {}, (res) => {
          this.roleData = res.data
        })
      })
 

    },
    closeRole() {
      this.roleDialog = false
    },
    deleteUser(row) {
      del(row ,this.operateApi ,"userName")
    },
  },
  created() {
    perms('/sys:user/perms',this.perms)
  }
}
</script>
<style scoped>

.select {
  width: 90%;
  margin-left: 10%;
}
.add {
  float: right;
}
</style>
