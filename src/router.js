import Vue from 'vue'
import Router from 'vue-router'
// import { PageFirstComponent } from './component/first/component'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/first'
    }, {
        path: '/first',
        // component: PageFirstComponent
        component: () => import('./component/first/component')
    }, {
        path: '/two',
        component: () => import('./component/two/component')
    }, {
        path: '/three',
        component: () => import('./component/three/component')
    }]
})
