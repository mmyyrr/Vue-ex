<template>
	<div class="newsinfo-container">
		<h3 class="title">{{newsinfo.title}}---{{id}}</h3>
		<p class="info">
			<span>发表时间：{{newsinfo.add_time|dataFormat}}</span>
			<span>点击：{{newsinfo.clicked}}</span>
		</p>
		<hr>
		<p v-html="newsinfo.content"></p>
		<comment :newsId="id"></comment>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	import comment from '../subcomponents/comment.vue';
	export default{
		data(){
			return{
				id:this.$route.params.id,
				newsinfo:{}
			}
		},
		created(){
			this.getNewsInfo();
		},
		methods:{
			async getNewsInfo(){
				console.log(this.id);
				const {data} = await this.$http.get('getnewsdetail?newsid='+this.id);
				if(data.status===1){
					this.newsinfo = data.news;
				}
			}
		},
		components:{
			comment
		}
	}
</script>

<style lang="scss" scoped>
	.newsinfo-container{
		padding:3px;
		.title{
			font-size: 30spx;
			text-align: center;
			color: black;
			margin: 15px 0;
		}
		.info{
			color: #26a2ff;
			display: flex;
			justify-content: space-between;
		}
		
	}
</style>
