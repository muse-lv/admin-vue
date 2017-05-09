<template>
	<el-tooltip :content="content" :placement="placement">
		<el-button size="small" type="info" :icon="icon" @click="handleClick"></el-button>
	</el-tooltip>
</template>
<script>
	export default {
  	name:"syViewBtn",
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    },
    props: {
    	placement: {
    		type: String,
    		default: "top"
    	},
    	content: {
    		type: String,
    		default: "查看"
    	},
      icon: {
        type: String,
        default: "view"
      }
    }
	}
</script>