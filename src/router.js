"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
vue_1["default"].use(vue_router_1["default"]);
exports["default"] = new vue_router_1["default"]({
    routes: [{
            path: '/',
            redirect: '/first'
        }, {
            path: '/first',
            component: function () { return Promise.resolve().then(function () { return require('./component/first/component'); }); }
        }, {
            path: '/two',
            component: function () { return Promise.resolve().then(function () { return require('./component/two/component'); }); }
        }, {
            path: '/three',
            component: function () { return Promise.resolve().then(function () { return require('./component/three/component'); }); }
        }]
});
