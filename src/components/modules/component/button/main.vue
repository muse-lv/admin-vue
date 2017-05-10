<template>
	<div class="">
		<sy-delete-btn></sy-delete-btn>
		<sy-set-btn></sy-set-btn>
		<sy-search-btn></sy-search-btn>
		<sy-copy-btn></sy-copy-btn>
		<sy-view-btn></sy-view-btn>
		<sy-edit-btn></sy-edit-btn>
	</div>
</template>

<script>
  import syDeleteBtn from '@/components/public/syDeleteBtn/main'
  import sySetBtn from '@/components/public/sySetBtn/main'
  import sySearchBtn from '@/components/public/sySearchBtn/main'
  import syCopyBtn from '@/components/public/syCopyBtn/main'
  import syViewBtn from '@/components/public/syViewBtn/main'
  import syEditBtn from '@/components/public/syEditBtn/main'
	export default {
		components: {
			syDeleteBtn,
			sySetBtn,
			sySearchBtn,
			syCopyBtn,
			syViewBtn,
			syEditBtn
		},
		data() {
			return {

			}
		},
		methods: {

		},
		created() {

		}
	}
</script>

<style scoped>
	
</style>