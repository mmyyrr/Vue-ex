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
import '../lib/mui/css/mui.min.css'
// 导入MUI的扩展图标
import '../lib/mui/css/icons-extra.css'

import App from './components/App.vue';
const vm = new Vue({
	el:"#app",
	render:c=>c(App),
	router
})