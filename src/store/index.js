import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

/**
 * 管理入口
 */


Vue.use(Vuex);

const state = {
    username: '', //用户名
    cartcount: 0  //购物车数量
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})
