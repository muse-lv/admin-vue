<template>
  <div class="log">
    <div class="search">
      <div class="mb-20 inline-block mr-15">
        <el-input placeholder="搜索模块名称..." size="small" v-model="search.module"></el-input>
      </div>
      <div class="mb-20 inline-block mr-15">
        <el-input placeholder="搜索操作名称..." size="small" v-model="search.opt"></el-input>
      </div>
      <div class="mb-20 inline-block mr-15">
        <el-input placeholder="搜索操作者..." size="small" v-model="search.actor"></el-input>
      </div>
      <div class="mb-20 inline-block mr-15">
        <el-date-picker size="small" type="date" placeholder="开始时间" align="right" class="time" v-model="search.start" @change='startAction'>
        </el-date-picker>
      </div>
      <div class="mb-20 inline-block mr-15">
        <el-date-picker size="small" type="date" placeholder="结束时间" align="right" class="time" v-model="search.end" @change='endAction'>
        </el-date-picker>
      </div>
      <div class="mb-20 inline-block mr-15">
        <sy-search-btn @click="searchLog"></sy-search-btn>
      </div>
    </div>
    <sy-table :api="api" :parameter="parameter" ref="pagination">
      <template scope="props">
        <el-table border :data="props.tabelData" element-loading-text="加载中..." v-loading="props.loading">
          <el-table-column type="index" width="75" align="center" label="序号" show-overflow-tooltip>
          </el-table-column>
          <el-table-column sortable prop="moduleName" label="模块名称" width="150" show-overflow-tooltip align="center">
          </el-table-column>
          <el-table-column sortable prop="optName" label="操作名称" width="150" show-overflow-tooltip align="center">
          </el-table-column>
          <el-table-column sortable prop="actorName" label="操作者" width="100" show-overflow-tooltip align="center">
          </el-table-column>
          <el-table-column sortable prop="ip" label="ip" width="130" show-overflow-tooltip align="center">
          </el-table-column>
          <el-table-column sortable prop="requestUrl" label="请求地址" width="180" show-overflow-tooltip align="center">
          </el-table-column>
          <el-table-column sortable prop="content" label="参数" min-width="140" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="createDateTime" label="操作时间" width="175" show-overflow-tooltip align="center">
          </el-table-column>
        </el-table>
      </template>
    </sy-table>
    <sy-back-top></sy-back-top>
  </div>
</template>
<script>
import syTable from '@/components/public/syTable/main'
import sySearchBtn from '@/components/public/sySearchBtn/main'
import syBackTop from '@/components/public/syBackTop/main'


export default {
  components: {
    syTable,
    sySearchBtn,
    syBackTop
  },
  props: {
    tabelData: {
      type: Array
    }
  },
  data() {
    return {
      api: '/log/optlog/list',
      parameter: {},
      search: {
        module: "",
        opt: "",
        actor: "",
        start: "",
        end: ""
      }
    }
  },
  methods: {
    searchLog() {
      this.parameter.module = this.search.module
      this.parameter.opt = this.search.opt
      this.parameter.actor = this.search.actor
      this.$refs.pagination.getData()
    },
    startAction(time) {
      this.parameter.start = time
    },
    endAction(time) {
      this.parameter.end = time
    }
  }
}
</script>
<style scoped>
.search {
  font-size: 0px;
}
</style>
