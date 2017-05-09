<template>
  <div class="opt clearfix">
    <div class="opt-left">
      <el-tree :data="tree" :props="defaultProps" show-checkbox node-key="recId" default-expand-all ref="tree"
               check-strictly @check-change="checkChange"></el-tree>
    </div>
    <div class="opt-right">
      <div class="opt-right-content">
        <opt-add :parentId="currentId" v-if="perms.add"></opt-add>
        <el-table :data="tableData" border element-loading-text="加载中..." v-loading="loading">
          <el-table-column sortable prop="permissionName" label="名称" min-width="175" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column sortable prop="permCode" label="权限编码" align="let" show-overflow-tooltip min-width="175">
          </el-table-column>
          <el-table-column sortable prop="sortNo" label="排序号" align="center" show-overflow-tooltip min-width="175">
          </el-table-column>
          <el-table-column label="操作" min-width="120" align="center" show-overflow-tooltip>
            <template scope="scope">
              <opt-edit :item="scope.row" v-if="perms.edit"></opt-edit>
              <opt-del :item="scope.row" :parentId="currentId" v-if="perms.delete"></opt-del>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <opt-dialog :parentId="currentId"></opt-dialog>
    <sy-back-top></sy-back-top>
  </div>
</template>
<script>
  import bus from '@/assets/js/bus'
  import perms from '@/assets/js/perms.js'
  import request from '@/assets/js/request'
  import optAdd from '@/components/modules/sys/opt/vue/add'
  import optDel from '@/components/modules/sys/opt/vue/del'
  import optEdit from '@/components/modules/sys/opt/vue/edit'
  import optDialog from '@/components/modules/sys/opt/vue/dialog'
  import syBackTop from '@/components/public/syBackTop/main'

  export default {
    components: {
      optAdd,
      optDialog,
      optDel,
      optEdit,
      syBackTop
    },
    data() {
      return {
        perms: {
          add: false,
          edit: false,
          delete: false,
          view: false
        },
        tree: [],
        defaultProps: {
          children: 'children',
          label: 'nodeName'
        },
        currentId: null,
        tableData: [],
        loading: false
      }
    },
    created() {
      perms('/sys:opt/perms', this.perms)
      this.getTree()
      bus.$on('reload-opt', (id) => {
        this.getOptList(id)
      })
    },
    methods: {
      getTree() {
        request.getList('/sys/menu/tree/', {}, (res) => {
          this.tree = res.data
        })
      },

      getOptList(id) {
        let requestUrl = '/sys/opt/list/' + 1
        this.loading = true
        request.getList(requestUrl, {}, (res) => {
          this.tableData = res.data
          this.loading = false
        }, () => {
          this.loading = false
        }, () => {
          this.loading = false
        })
      },

      checkChange(item, isChecked, isHasChecked) {

        if (isChecked) {
          this.$refs.tree.setCheckedKeys([item.recId])
          this.currentId = item.recId
          this.getOptList(this.currentId)
        }

        if (this.$refs.tree.getCheckedKeys().length === 0) {
          this.$refs.tree.setCheckedKeys([this.currentId])
        }

      }
    }
  }
</script>
<style scoped>
  .opt {
    min-width: 900px;
  }

  .opt-left {
    width: 20%;
    float: left;
    overflow: hidden;
  }

  .opt-right {
    float: left;
    min-height: 100px;
    width: 80%;
  }

  .opt-right-content {
    padding: 10px;
    min-height: 100px;
  }
</style>
