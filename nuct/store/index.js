/*import Vue from 'vue';//引入VUE
import Vuex from 'vuex';//引入VUEX
import Cookies from 'js-cookie';//引入cookie

//使用VUEX
Vue.use(Vuex);*/

//要设置的全局访问的state对象
export const state = () => ({
    list: '',
});

//实时监听state的变化（最新状态）
export const getters = {
    getList: (state) => {
        return state.list;
    }
};

//改变state初始值的方法
export const mutations = {
    setList: (state, payload) => {
        state.list = payload.list;
    }
};

//包含任何异步操作，异步出发mutations里边的方法
export const actions = {

};

//创建VUEX实例
/*const store = () => {
    return new Vuex.Store({
        state,
        getters,
        mutations,
        actions
    })
};

export default store;*/