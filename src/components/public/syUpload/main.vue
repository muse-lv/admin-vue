<template>
  <div class="upload-warp" :style="avatarStyle">
    <el-upload :action="action" :show-file-list="false" class="upload" ref="upload" list-type="picture" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
      <img v-if="value" :src="value" :style="avatarStyle">
      <img v-else src="../../../assets/img/avatar.jpg" alt="暂无图片" :style="avatarStyle">
      <div class="cover" v-if="showCover">
        <div class="cover-btn">
          <i class="el-icon-edit" @click="onEdit"></i>
          <i class="el-icon-view" @click.stop="onPreview"></i>
          <i class="el-icon-delete2" @click.stop="onDelete"></i>
          <slot name="btn"></slot>
        </div>
      </div>
      <slot name="coverIcon"></slot>
    </el-upload>
    <el-dialog v-model="dialogVisible" size="tiny">
      <img width="100%" src="../../../assets/img/avatar.jpg" alt="">
    </el-dialog>
  </div>
</template>
<script>
import layer from '@/assets/js/layer'
export default {
  computed: {
  },
  data() {
    return {
      dialogVisible: false,
      mouseover: false,
      showCover: true,
      myDefaultImgSrc: ''
    }
  },
  props: {
    action: {
      type: String,
      default: 'https://jsonplaceholder.typicode.com/posts/'
    },
    defaultImgSrc: {
      type: String
    },
    avatarStyle: {},
    value: String,
    maxFileSize: {
      type: Number,
      default: 2
    },
    myDelete: {
      type: Boolean,
      default: false
    }
  },
  created() {   


  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.$emit('input', res.ossPath)
      this.showCover = true
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLtMaxFileSize = file.size / 1024 / 1024 < this.maxFileSize

      if (!isJPG && !isPNG) {
        layer.warning('上传图片必须为 JPG或者PNG 格式')
      }
      if (!isLtMaxFileSize) {
        layer.warning('上传图片大小必须小于' + this.maxFileSize + 'M')
      }

      return (isJPG || isPNG) && isLtMaxFileSize
    },
    onPreview() {
      this.dialogVisible = true
    },
    onDelete() {
      if(!this.myDelete) {        
        this.$confirm('删除图片？', '删除').then(() => {
          this.$emit('input', '')
          this.$emit('delete')
          this.showCover = false
        }).catch(() => {})
      }else {
        this.$emit('delete')
      }
    },
    onEdit() {}
  },
  watch: {
    defaultImgSrc(value) {
      this.myDefaultImgSrc = value
    },
    value(value) {
      if (value !== '') {
        this.showCover = true
      }
      this.$emit('change', value)
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [value])
      }
    }
  }
}
</script>
<style>
.upload-warp {
  display: inline-block;
  width: 100%;
}

.upload-warp .upload {
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  font-size: 0;
  line-height: 0;
  width: 100%;
  -webkit-transform: rotate(0deg);
  box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.2), 0 0px 3px 0 rgba(0, 0, 0, 0.2);
}

.upload-warp .upload:hover .cover {
  bottom: 0px;
}

.upload-warp .cover {
  position: absolute;
  bottom: -40px;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  transition: bottom 0.3s ease-in-out;
}

.upload-warp .cover .cover-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.upload-warp .cover .cover-btn i {
  color: #fff;
  font-size: 20px;
  padding: 10px;
  transition: color 0.2s ease-in-out;
}

.upload-warp .cover .cover-btn i:hover {
  color: #333;
}

.upload-warp .el-upload {
  width: 100%;
}
</style>