import Vue from 'vue';
// 导入路由
import VueRouter from 'vue-router';
import ViewA from '@/views/ViewA.vue';
import ViewB from '@/views/ViewB.vue';
import ViewC from '@/views/ViewC.vue';
import NotFound from '@/views/NotFound.vue';
import ChildrenViewC from '@/views/ChildrenViewC.vue';
// 注册路由
Vue.use(VueRouter);
// 创建路由对象
const router = new VueRouter({
    // 路由模式（hash/history/abstract）
    mode: 'hash',
    routes: [
        // 重定向
        { path: '/', redirect: '/viewA' },
        { path: '/viewA', component: ViewA },
        { path: '/viewB', component: ViewB },
        // 动态路由传参
        // 参数可选符
        // 路由嵌套
        // { name: 'ViewC', path: '/viewC/:keywords?', component: ViewC },
        { name: 'ViewC', path: '/viewC', component: ViewC, children: [{ path: 'childrenViewC', component: ChildrenViewC }] },
        // 404
        { path: '*', component: NotFound }
    ],
    // 自定义模糊匹配和精确匹配的类名
    linkActiveClass: "router-link-active",
    linkExactActiveClass: "router-link-exact-active",
});
export default router