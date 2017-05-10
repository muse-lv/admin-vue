<template>
	<div class="">
		<sy-upload :avatarStyle="avatarStyle"></sy-upload>
	</div>
</template>

<script>
  import syUpload from '@/components/public/syUpload/main'
	export default {
		components: {
			syUpload
		},
		data() {
			return {				
	      avatarStyle: {
	        width: '150px',
	        height: '150px'
	      }
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