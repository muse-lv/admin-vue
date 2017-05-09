<template>
	<div class="back-top" :class="show ? 'back-top-show':'back-top-hidden'" @click="backTop">
		<i class="el-icon-caret-top"></i>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		methods: {
			//按钮显示
			isShow() {
				let vm = this
				let view = document.getElementById('sy-view')
				view.onscroll = function() {
					if(view.scrollTop > 100) {
						vm.show = true
					}else {
						vm.show = false
					}
				}
			},
			//回到顶部
			backTop() {
				let view = document.getElementById('sy-view')
				let timer = setInterval(function(){  
          let top = view.scrollTop
          let speed = top / 5  
          view.scrollTop = top - speed  
          if(top === 0){  
             clearInterval(timer)
          }  
        },30)
			}
		},
		mounted() {
			this.isShow()
		}
	}
</script>
<style scoped>
	.back-top {
		background-color: #58b7ff;
    position: fixed;
    right: 100px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    cursor: pointer;
    transition: .3s;
    z-index: 9;
	}

	.back-top-hidden {
    bottom: 200px;
    opacity: 0;
    visibility: hidden;
	}

	.back-top-show {
    bottom: 150px;
    opacity: .4;
    visibility: visible;
	}

	.back-top:hover {
		opacity: 0.8;
	}

	.back-top i{
		color: #fff;
    display: block;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
	}
</style>