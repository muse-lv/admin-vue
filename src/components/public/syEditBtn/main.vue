<template>
	<el-tooltip :content="content" :placement="placement">
		<el-button size="small" type="warning" :icon="icon" @click="handleClick"></el-button>
	</el-tooltip>
</template>
<script>
	export default {
		name:"syEditBtn",
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
    		default: "编辑"
    	},
        icon: {
            type: String,
            default: "edit"
        }
    }
	}
</script>