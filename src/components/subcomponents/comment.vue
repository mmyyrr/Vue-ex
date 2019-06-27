<template>
	<div>
		<h4>发表评论</h4>
		<hr>
		<textarea placeholder="请直抒胸臆,不必扭扭捏捏(最多120字)" maxlength="120" v-model="msg"></textarea>
		<mt-button type="primary" size="large" @click="postCom">发表评论</mt-button>
		
		<!-- 评论列表 -->
		<div class="cmt-list">
			<div class="cmt-list-item" v-for="(item,i) in comments" :key="i">
				<div class="cmt-title">
					第{{i+1}}楼&nbsp;&nbsp;用户：{{item.username}}&nbsp;&nbsp;发表时间：{{item.comDate|dataFormat}}
				</div>
				<div class="cmt-content">
					{{item.content}}
				</div>
			</div>
		</div>
		
		<mt-button type="danger" size="large" plain @click.native="loadMore">加载更多</mt-button>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	export default{
		data(){
			return{
				comments:[],
				page: 1,
				msg:''
			}
		},
		props:[
			"newsId"
		],
		created(){
			this.getComments();
		},
		methods:{
			async getComments(){
				const {data}= await this.$http.get('getnewscom?newsId='+this.newsId+'&pageIdx='+this.page);
				if(data.status===1){
					console.log(data.comments);
					this.comments = this.comments.concat(data.comments);
					console.log(this.comments);
				}
			},
			loadMore(){
				this.page++;
				this.getComments();
				Toast('执行了！')
			},
			async postCom(){
				if(this.msg.trim().length<=0) return Toast('评论内容不能为空！');
				const {data} =this.$http.post('addnewscom?newsId='+this.newsId,
				{content:this.msg.trim()},
				);
				
				this.comments.unshift({
					comId:17,
					username:"moon",
					conDate:Date.now(),
					content:this.msg.trim()
				});
				this.msg='';
				
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cmt-list{
		margin:5px;
		.cmt-list-item{
			line-height: 30px;
			.cmt-title{
				background-color: #ccc;
				font-size: 18px;
			}
			.cmt-content{
				font-size: 16px;
				text-indent: 2em;
			}
		}
		
	}
</style>
