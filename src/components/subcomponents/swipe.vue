<template>
	<mt-swipe :auto="4000">
	  <mt-swipe-item>1</mt-swipe-item>
	  <mt-swipe-item>2</mt-swipe-item>
	  <mt-swipe-item>3</mt-swipe-item>
	</mt-swipe>
</template>

<script>
	export default{
		name:"swipe"
	}
</script>

<style lang="scss" scoped>
	.mint-swipe {
		height: 250px;
	}
</style>
