<template>
	<div class="">
	<quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
	</div>
</template>

<script>
	import { quillEditor } from 'vue-quill-editor'
	export default {
		components: {
			quillEditor
		},
		data() {
			return {
				content:'',
				editorOption: {}
			}
		},
		methods: {

		},
		created() {

		}
	}
</script>

<style>
	.ql-container .ql-editor {
    min-height: 150px;
    padding-bottom: 10px;
    max-height: 500px;
  }
  .editor-wrap .el-form-item__content{
    line-height: 20px;
  }
</style>