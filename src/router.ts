import Vue from 'vue'
import Router from 'vue-router'
import { PageFirstComponent } from './component/first/component'
import { PageTwoComponent } from './component/two/component'
import { PageThreeComponent }from './component/three/component'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: PageFirstComponent
    }, {
        path: '/first',
        component: PageFirstComponent
    }, {
        path: '/two',
        component: PageTwoComponent
    }, {
        path: '/three',
        component: PageThreeComponent
    }]
})
