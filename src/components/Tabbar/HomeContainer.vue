<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(item,i) in lunboList" :key="i">
			 <img :src="item" > 
		  </mt-swipe-item>		  
		</mt-swipe>
		
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 	
	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	export default{
		data(){
			return {
				lunboList:[]
			}
		},
		created(){
			this.getLunbo();
		},
		methods:{
			getLunbo(){
				this.$http.get('getcover').then(result=>{
					if(result.body.status===1){
						this.lunboList=result.body.imgs;
					}else{
						Toast('数据加载失败');
					}
				});
			}
		},
		//父组件使用子组件，第一，一定要import导入，第二，一定要在components里边注册，第三，在template里占坑
		components:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.mint-swipe {
		height: 300px;
		.mint-swipe-item{
			img{
				width: 680px;
				height: 300px;
			}
		}
	}
	.mui-grid-view.mui-grid-9{
		border:0;
		background-color: #fff;	
		.mui-table-view-cell{
			border: 0;
		}
	}
	.mui-col-sm-3{
		width:33.3%
	}
	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
	  font-size: 13px;
	}
</style>
  