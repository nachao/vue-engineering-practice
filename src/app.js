import Vue from 'vue'
// import VueRouter from 'vue-router'


/**
 * 引入组件
 */
// import PageOne from './template/page1/component'
import PageOne from './template/page1/component.vue'


/**
 * 多页面时，使用路由
 * 详细查看：https://router.vuejs.org/zh/
 */
// import Page1 from './template/page1.vue'
// import Page2 from './template/page2.vue'
// import Page3 from './template/page3.vue'
// const router = new VueRouter({
// 	routes: [
// 		{ path: '/', component: Index },
// 		{ path: '/page1', component: Page1 },
// 		{ path: '/page2', component: Page2 },
// 		{ path: '/page3', component: Page3 },
// 	]
// })
// const app = new Vue({ router })


/**
 * 单页面时，直接实例即可
 */
 const app =new Vue({
 	render: h => h(PageOne)
 })


/**
 * 实例
 */
app.$mount('#app')