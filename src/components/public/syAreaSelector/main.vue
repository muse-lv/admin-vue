<template>
  <el-form-item label="所属区域" required>
    <el-col :span="7">
      <el-form-item label-width="0px" prop="province">
        <el-select placeholder="省份" v-model="province" @change="provinceChange">
          <el-option :label="item.gbName" :value="item.gbCode" v-for="item in provinceList" :key="item.gbCode"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="7" :offset="1">
      <el-form-item label-width="0px" prop="city">
        <el-select placeholder="城市" v-model="city" @change="cityChange">
          <el-option :label="item.gbName" :value="item.gbCode" v-for="item in cityList" :key="item.gbCode"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="7" :offset="1">
      <el-form-item label-width="0px" prop="area">
        <el-select placeholder="地区" v-model="area" @change="areaChange">
          <el-option :label="item.gbName" :value="item.gbCode" v-for="item in areaList" :key="item.gbCode"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
  </el-form-item>
</template>
<script>
import request from '@/assets/js/request'
export default {
  data() {
      return {
        province: '',
        city: '',
        area: '',
        provinceLabel: '',
        cityLabel: '',
        areaLabel: '',
        provinceList: [],
        cityList: [],
        areaList: [],
        myDefaultCity: '',
        myDefaultArea: '',
        provinceRule: '',
        address: ''
      }
    },
    props: {
      defaultProvince: '',
      defaultCity: '',
      defaultArea: ''
    },
    watch: {
      defaultProvince(val) {
        this.province = val
      },
      defaultCity(val) {
        this.myDefaultCity = val
        this.city = val
      },
      defaultArea(val) {
        this.myDefaultArea = val
        this.area = val
      },
      areaLabel(val) {
        this.$emit('input', {
          city: this.city,
          province: this.province,
          area: this.area,
          provinceLabel: this.provinceLabel,
          cityLabel: this.cityLabel,
          areaLabel: this.areaLabel,
          address: this.address
        })
      }
    },
    created() {
      this.getProvinceList()
    },
    methods: {
      // 根据列表获取对应的文本
      getAreaLabel(code, list) {
        let label = ''
        let len = list.length
        for (let i = 0; i < len; i++) {
          if (list[i].gbCode === code) {
            label = list[i].gbName
          }
        }
        return label
      },
      // 获取地区数据
      getAreaData(code, callback) {
        let url = '/sys/basicdata/area/' + code
        return request.getList(url, {}, (res) => {
          callback(res)
        })
      },

      // 获取省份列表
      getProvinceList() {
        return this.getAreaData(100000, (res) => {
          this.provinceList = res.data
        })
      },

      // 省份改变
      provinceChange(value) {
        this.provinceLabel = this.getAreaLabel(this.province, this.provinceList)
        let choiceCity = ''
        return this.getAreaData(value, (res) => {
          if (!!this.myDefaultCity) {
            choiceCity = this.myDefaultCity
            this.myDefaultCity = ''
          } else {
            this.city = res.data[0].gbCode
            choiceCity = res.data[0].gbCode
          }
          this.cityList = res.data
          this.cityLabel = this.getAreaLabel(choiceCity, this.cityList)

        })
      },

      // 城市改变
      cityChange(value) {
        return this.getAreaData(value, (res) => {
          let choiceCity = ''
          if (!!this.myDefaultArea) {
            choiceCity = this.myDefaultArea
            this.myDefaultArea = ''
          } else {
            this.area = res.data[0].gbCode
            choiceCity = res.data[0].gbCode
          }
          this.areaList = res.data
          this.areaLabel = this.getAreaLabel(choiceCity, this.areaList)
          this.address = this.provinceLabel + this.cityLabel + this.areaLabel
        })
      },

      // 地区改变
      areaChange(value) {

      }
    }
}
</script>
<style></style>