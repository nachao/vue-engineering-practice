import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/first'
    }, {
        path: '/first',
        component: () => import('./component/first/component')
    }, {
        path: '/two',
        component: () => import('./component/two/component')
    }, {
        path: '/three',
        component: () => import('./component/three/component')
    }]
})
