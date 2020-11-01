import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'

// axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，它本身具有以下特征：

// 从浏览器中创建 XMLHttpRequest
// 从 node.js 发出 http 请求
// 支持 Promise API
// 拦截请求和响应
// 转换请求和响应数据
// 取消请求
// 自动转换JSON数据
// 客户端支持防止 CSRF/XSRF(跨域请求伪造)


//Vue.use()是使用插件，VueRouter是vuejs官方提供的一个路由插件
//VueRouter 通过 Vue.use() 注册插件，
// 		通过 Vue.mixin beforeCreate 生命周期函数，在把 router 放入 new Vue({router}) ，
// 		Vue 实力创建后触发  beforeCreate 来启动 router。
Vue.use(VueRouter)

//创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数
const router = new VueRouter({
	routes
})

//配置完成后，把router 实例注入到 vue 根实例中,就可以使用路由了
new Vue({
	router,
	store,
}).$mount('#app')
//Vue 的$mount()为手动挂载，在项目中可用于延时挂载（例如在挂载之前要进行一些其他操作、判断等），之后要手动挂载上。