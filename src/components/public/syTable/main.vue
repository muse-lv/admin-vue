<template>
  <div>
    <slot :tabelData="tabelData" :loading="loading" :listPerms="listPerms"></slot>
    <el-pagination :page-sizes="[10, 20, 50, 100]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="pageSizeChange" @current-change="currentPageChange" v-if="pagination">
    </el-pagination>
  </div>
</template>
<script>
import request from '@/assets/js/request.js'
import listPerms from '@/assets/js/listPerms'
import bus from '@/assets/js/bus.js'

export default {
  name: "syTable",
  props: {
    api: {
      type: String,
      default: ''
    },
    parameter: {
      type: Object,
      default: {}
    },
    pagination: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      tabelData: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
      loading: false,
      listPerms: {}
    }
  },
  computed: {
    change: function() {
      return this.currentPage
    }
  },
  methods: {   
     //回到顶部
    backTop() {
      let view = document.getElementById('sy-view')
      if(view.scrollTop === 0) {
        return
      }
      let timer = setInterval(function(){  
        let top = view.scrollTop
        let speed = top / 5  
        view.scrollTop = top - speed  
        if(top === 0){  
           clearInterval(timer)
        }  
      },30)
    },
    getData(callback) {
      this.parameter['current'] = this.currentPage
      this.parameter['size'] = this.pageSize
      this.loading = true
      return request.getList(this.api, this.parameter, (res) => {

        // 设置列表权限
        // this.$store.commit('modifyState', {
        //   key: 'listPerms',
        //   value: listPerms(res)
        // })
        this.listPerms = listPerms(res)
        if (res.data.records) {
          this.tabelData = res.data.records
          this.total = res.data.total
        } else {
          this.tabelData = res.data
        }

        this.loading = false
        if(typeof callback === 'function') {
          callback()
        } 
      }, () => {
        this.loading = false
      }, () => {
        this.loading = false
      })
    },
    pageSizeChange(val) {
      // 每页的条目数
      this.pageSize = val
      this.getData()
    },
    currentPageChange(val) {
      // 当前的页码
      this.currentPage = val
      this.getData(this.backTop)
    },
    reload() {
      this.getData()
    }
  },
  created() {

    bus.$off('reloadTable')

    bus.$on('reloadTable', target => {
      this.getData()
    })

    this.getData()
  }
}
</script>
<style scoped>
.el-pagination {
  text-align: center;
  padding-top: 15px;
}
</style>