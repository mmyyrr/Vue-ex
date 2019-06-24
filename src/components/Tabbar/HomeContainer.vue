<template>
	<div>
		<swipe></swipe>
	</div>
</template>

<script>
	import swipe from '../subcomponents/swipe.vue';
	export default{
		data(){
			return {
				
			}
		},
		//父组件使用子组件，第一，一定要import导入，第二，一定要在components里边注册，第三，在template里占坑
		components:{
			swipe
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
