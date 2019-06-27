<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="(item,i) in newsList" :key="item._id">
				<router-link :to="'/home/newslist/'+(i+1)">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis'>
							<span>发表时间：{{ item.add_time| dataFormat}}</span>
							<span>点击：{{ item.clicked }}次</span>
						</p>
					</div>
				</router-link>
			</li> 
		</ul>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	export default{
		data(){
			return {
				newsList: [],
				
			}
		},
		created(){
			this.getNews();
		},
		methods:{
			async getNews(){
				const {data} = await this.$http.get('getnews?pageIdx=1');
				if (data.status===1) {
					return this.newsList = JSON.parse(data.news);//很关键的一个点，从数据库取出的数据是json格式，要先转换成对象形式才可点出
				}else{
					Toast('数据获取失败');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mui-media-body {
	  h1 {
	    font-size: 14px;
	  }
	  .mui-ellipsis {
	    color: #26a2ff;
	    display: flex;
	    justify-content: space-between;
	    font-size: 13px;
	  }
	}
	
	
</style>

