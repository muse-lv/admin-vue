<template>
  <div class="log">
    <div class="search">
      <div class="mb-20 inline-block mr-15">
        <el-input placeholder="搜索用户名..." size="small" v-model="search.userName"></el-input>
      </div>
      <div class="mb-20 inline-block mr-15">
        <el-select v-model="search.clientTypeValue" clearable placeholder="请选择客户端..." size="small">
          <el-option v-for="item in clientTypeValueOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="mb-20 inline-block mr-15">
        <el-input placeholder="搜索浏览器..." size="small" v-model="search.browser"></el-input>
      </div>
      <div class="mb-20 inline-block mr-15">
        <el-date-picker size="small" type="date" placeholder="开始时间" align="right" class="time" v-model="search.start" @change='startTime'>
        </el-date-picker>
      </div>
      <div class="mb-20 inline-block mr-15">
        <el-date-picker size="small" type="date" placeholder="结束时间" align="right" class="time" v-model="search.end" @change='endTime'>
        </el-date-picker>
      </div>
      <div class="mb-20 inline-block mr-15">
        <el-select v-model="search.infoTypeName" clearable placeholder="请选择通知类型..." size="small">
          <el-option v-for="item in infoTypeNameOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </div>
      <div class="mb-20 inline-block mr-15">
        <sy-search-btn @click="searchLog"></sy-search-btn>
      </div>
    </div>
    <sy-table :api="api" :parameter="parameter" ref="pagination">
      <template scope="props">
        <el-table border :data="props.tabelData" element-loading-text="加载中..." v-loading="props.loading" :max-height="tabelHeight">
          <el-table-column type="index" width="75" label="序号" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column sortable prop="userName" label="用户名" width="120" show-overflow-tooltip align="center">
          </el-table-column>
          <el-table-column sortable prop="ip" label="ip地址" width="150" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column sortable prop="isMobileValue" label="是否移动设备" width="150" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column sortable prop="clientTypeValue" label="客户端" width="120" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column sortable prop="browser" label="浏览器" width="140" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column sortable prop="createDateTime" label="操作时间" width="175" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="infoTypeName" label="通知类型" show-overflow-tooltip>
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
      tabelHeight: 0,
      api: '/log/loginlog/list',
      parameter: {},
      infoTypeNameOptions: [{
        value: '0',
        label: '登录'
      }, {
        value: '1',
        label: '退出'
      }, {
        value: '2',
        label: '登录失败'
      }, {
        value: '3',
        label: 'session超时'
      }],
      clientTypeValueOptions: [{
        value: '0',
        label: 'pc'
      }, {
        value: '1',
        label: '手机浏览器'
      }, {
        value: '2',
        label: '微信'
      }],
      search: {
        infoTypeName: "",
        userName: "",
        browser: "",
        clientTypeValue: "",
        start: "",
        end: ""
      }
    }
  },
  methods: {
    searchLog() {
      this.parameter.infoType = this.search.infoTypeName
      this.parameter.userName = this.search.userName
      this.parameter.browser = this.search.browser
      this.parameter.clientType = this.search.clientTypeValue
      this.$refs.pagination.getData()
    },
    startTime(time) {
      this.parameter.start = time
    },
    endTime(time) {
      this.parameter.end = time
    }
  },
  mounted() {

  }
}
</script>
<style scoped>
.search {
  font-size: 0px;
}

.log {
  position: relative;
}
</style>
