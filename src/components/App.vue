<template>
	<div class="app-container">
		<!-- Header fixed固定定位，脱离标准流-->
		<mt-header fixed title="愉快的vue学习之旅"></mt-header>
		<!-- 中间内容 -->
		
		<!-- 占位坑一定得有 -->
		<transition>
			<router-view></router-view>
		</transition>
		
		<!-- 底部Tabbar -->
		<nav class="mui-bar mui-bar-tab">
			<!-- 链接跳转一定得有，默认解析为a -->
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
	.app-container{
		padding-top: 40px;
		padding-bottom: 50px;
		overflow: hidden;
	}
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active, 
	.v-leave-active{
		transition: all 0.4s ease;
	}
</style>
 