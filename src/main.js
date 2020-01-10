import Vue from 'vue'
//import router from './router'
import routers from './router'
//不用每个页面导入
import axios from 'axios'
//将axios作用域对象挂载到vue实例止，方便我们用this调用
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'
/**
 * import  是预编译时就加载
 * require  执行时才会加载
 * @type {boolean}
 */
//mock开关
const mock = false;
if(mock){
    require('./mock/api')
}

//根据前端的跨域方式作调整  前端与后端面路径一致  /a/b  /api/a/b => （转发） /a/b
//接口代理方式
// axios.defaults.baseURL = '/api';
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5e133dcfd49ea764822551ec';
//根据环境变量获取请求地址
// axios.defaults.baseURL = env.baseURL;
//超时时间
axios.defaults.timeout = 8000;

//接口错误拦截
axios.interceptors.response.use(function (response) {
    let res = response.data;
    if (res.code == 0) {
        return res.data;
    } else if (res.code == 100001) {
        window.location.href = '/#/login';
    } else {
        alert(res.msg);
    }
})


// Vue.user()  加载插件  Vue.use(VueAxios, axios);  发请求时就可以用this调用
Vue.use(VueAxios, axios);
//生产环境的提示，默认false
Vue.config.productionTip = false

new Vue({
    //router,  两种方式都可以
    router: routers,
    render: h => h(App),
}).$mount('#app')
