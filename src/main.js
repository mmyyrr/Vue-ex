import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import router from './router.js';

// 全局配置MintUI组件库
import MintUI from 'mint-ui';
// 导入 Mint-UI的样式表
import 'mint-ui/lib/style.css';
// 使用 Vue.use 来批量注册 MintUI 的组件
Vue.use(MintUI);

// 导入 MUI 的样式表
import '../lib/mui/css/mui.min.css';
// 导入MUI的扩展图标
import '../lib/mui/css/icons-extra.css';

//导入vue-resource,来发起ajax请求
import VueResource from 'vue-resource';
//全局注册
Vue.use(VueResource);
//全局配置根路径
Vue.http.options.root='http://localhost:3000/api';
Vue.http.options.emulateJSON=true;

//导入时间管理插件
import moment from 'moment';
//注册全局的过滤器
Vue.filter('dataFormat',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
	return moment(dataStr).format(pattern);
});

import App from './components/App.vue';

const vm = new Vue({
	el:"#app",
	render:c=>c(App),
	router
})