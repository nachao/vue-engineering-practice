"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var component_1 = require("./component/first/component");
var component_2 = require("./component/two/component");
var component_3 = require("./component/three/component");
vue_1["default"].use(vue_router_1["default"]);
exports["default"] = new vue_router_1["default"]({
    routes: [{
            path: '/',
            component: component_1.PageFirstComponent
        }, {
            path: '/first',
            component: component_1.PageFirstComponent
        }, {
            path: '/two',
            component: component_2.PageTwoComponent
        }, {
            path: '/three',
            component: component_3.PageThreeComponent
        }]
});
