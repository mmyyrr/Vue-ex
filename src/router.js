//第一，导入Vue-router的包
import VueRouter from 'vue-router';
//第二，导入路由项中提到的组件，记得写全文件名，后缀要加上

import HomeContainer from './components/Tabbar/HomeContainer.vue';
import MemberContainer from './components/Tabbar/MemberContainer.vue';
import ShopcarContainer from './components/Tabbar/ShopcarContainer.vue';
import SearchContainer from './components/Tabbar/SearchContainer.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';
//第三，创建一个router实例，并全局挂载在main.js的根vue实例上，且全局只能有一个router实例，可用this.$router直接获取
const router = new VueRouter({
	routes:[//路由表
		{path:'/',redirect:'/home'},
		{path:'/home',component:HomeContainer},
		{path:'/member',component:MemberContainer},
		{path:'/shopcar',component:ShopcarContainer},
		{path:'/search',component:SearchContainer},
		{path:'/home/newslist',component:newslist},
		{path:'/home/newslist/:id',component:newsinfo},
	]
});
//第四，很关键，要导出router实例
export default router