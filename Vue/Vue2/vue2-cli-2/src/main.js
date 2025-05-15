import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 全局自定义指令
Vue.directive("globalFocus", {
  inserted: function (el) {
    el.focus();
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')