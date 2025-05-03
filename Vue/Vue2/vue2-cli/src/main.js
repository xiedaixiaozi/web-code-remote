// 导入Vue
import Vue from 'vue';
// 导入App.vue根组件
import App from './App.vue';
// 禁用环境提示
Vue.config.productionTip = false;
// 全局注册
import ComponentWhole from './components/ComponentWhole.vue';
Vue.component("ComponentWhole", ComponentWhole);
// 实例化Vue并将App.vue渲染到index.html
new Vue({
  render: h => h(App),
}).$mount('#app');