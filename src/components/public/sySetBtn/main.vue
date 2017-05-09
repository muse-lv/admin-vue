<template>
	<el-tooltip :content="content" :placement="placement">
		<el-button size="small" type="info" icon="setting" @click="handleClick"></el-button>
	</el-tooltip>
</template>
<script>
	export default {
		name:"sySetBtn",
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    },
    props: {
    	content:{
    		type: String,
    		default: "设置"
    	},
    	placement: {
    		type: String,
    		default: "top"
    	}
    }
	}
</script>