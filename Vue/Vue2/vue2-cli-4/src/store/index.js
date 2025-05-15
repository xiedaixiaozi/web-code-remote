import Vue from "vue";
// 导入Vuex
import Vuex from "vuex";
import user from "./modules/user";
// 注册Vuex
Vue.use(Vuex);
// 创建仓库
const store = new Vuex.Store({
    // 开启严格模式，数据单向流动
    strict: true,
    // state是所有组件共享的数据
    state: {
        count: 100,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    },
    // 修改数据
    mutations: {
        // 多个属性，参数为对象
        addCount (state, n) {
            state.count += n.count;
        },
        // 单个属性，参数为属性
        subCount (state, n) {
            state.count -= n;
        },
        // 同步方法
        changeCount (state, newCount) {
            state.count = newCount
        }
    },
    // 异步操作
    actions: {
        setAsyncCount (context, newCount) {
            setTimeout(() => {
                context.commit("changeCount", newCount);
            }, 1000);
        },
        subAsyncCount (context, n) {
            setTimeout(() => {
                context.commit("subCount", n)
            }, 2000);
        }
    },
    getters: {
        filterList (state) {
            return state.list.filter(item => item > 5);
        }
    },
    modules: {
        user
    }
})

export default store;