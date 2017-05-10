<template>
  <div class="nav-bar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router :default-openeds="openeds">
      <template v-for="(item, index) in menu">
        <el-menu-item :index=" item.permCode" v-if="!item.children">
          <i :class="item.icon"></i>{{ item.nodeName }}
        </el-menu-item>
        <el-submenu :index="item.id" v-if="item.children">
          <template slot="title">
            <i :class="item.icon"></i> {{item.nodeName}}
          </template>
          <el-menu-item :index="child.permCode" v-for="child in item.children" :key="child.recId">
            <i :class="child.icon"></i> {{ child.nodeName }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import request from '@/assets/js/request'
import mock from '@/assets/js/mock'

export default {
  data() {
      return {
        openeds: [],
        menu: []
      }
    },
    watch: {
      $route(to, from) {
        this.getMenuState()
      }
    },
    computed: {
      menuTree() {
        return this.$store.getters.getMenuTree
      },
      onRoutes() {
        let path = this.$route.path
        let pathArray = path.split('/')
        if (pathArray[3] !== '') {
          path = '/' + pathArray[1] + '/' + pathArray[2]
          return path
        } else {
          if (path[path.length - 1] === '/') {
            path = path.substring(0, path.length - 1)
          }
          return path
        }
      }
    },
    created() {
      request.post('/sys/user/menutree', {}, (res) => {
        this.menu = res.data
        this.getMenuState()
      })
    },
    methods: {
      getMenuState() {

        let path = this.onRoutes


        let pathArray = path.split('/')

        path = pathArray[1] + '/' + pathArray[2]

        const menuLength = this.menu.length

        for (let i = 0; i < menuLength; i++) {

          this.menu[i].id = String(i)
          let children = this.menu[i].children

          if (children) {
            let childrenLength = children.length
            for (let j = 0; j < childrenLength; j++) {


              let permCode = '/' + children[j].ext.split(':')[0] + '/' + children[j].ext.split(':')[1]

              children[j].permCode = permCode

              if (children[j].permCode === '/' + path) {
                this.openeds = [this.menu[i].id]

                this.$store.commit('modifyState', {
                  key: 'currentPathNameParent',
                  value: this.menu[i].nodeName
                })

                this.$store.commit('modifyState', {
                  key: 'currentPathName',
                  value: children[j].nodeName
                })

              }
            }
          } else {
            this.$store.commit('modifyState', {
              key: 'currentPathNameParent',
              value: this.menu[i].nodeName
            })
          }
        }
      }

    }
}
</script>
<style scoped>
.admin {
  padding: 20px 0;
  color: #c0ccda;
  text-align: center;
}

.nav-bar {
  background: #324057;
  width: 240px;
  height: 100%;
  overflow-y: scroll;
  float: left;
}

.menu {
  border-top: 1px solid #475669;
}

.menu-icon {
  padding-right: 5px;
}
</style>