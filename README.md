# mimall
#学习vue商场前端

###搜索关键字
生成伪类
图片与文字在一行时居中
space-between两边对其


###插件
    cnpm install vuex --save
    cnpm install vue-router --save
    cnpm install jsonp -S
    cnpm install axios -S
    cnpm i vue-lazyload element-ui node-sass sass-loader vue-awesome-swiper vue-axios vue-cookie --save-dev  安装插件

###路由封装：
 
###Cookie localStorage sessionStorage 的区别？
 三者区别:
  
    存储大小： Cookie 4k ，Storage 5M
    有效期： Cookie拥有有效期，Storage永久存储
    Cookie会发送到服务器端，存储在内存中，Storage只有存储在浏览器端
    路径：Cookie有路径限制，Storage只存储在域名下
    API:Cookie没有特定的API,Storage有对应的API

###为什么封装Storage?
    Storage本身有API,但是只是简单的key-value形式
    Storage只存储字符串，需要手工转换成json对象
    Storage只能一次性清空，不能单个清空

###接口配置
    错误拦截
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
------
    环境设置
    evn.js 
    vue.config.js
    
    /根据前端的跨域方式作调整  前端与后端面路径一致  /a/b  /api/a/b => （转发） /a/b
    //接口代理方式
    axios.defaults.baseURL = '/api';
    //根据环境变量获取请求地址
    axios.defaults.baseURL = env.baseURL;
    //超时时间
    axios.defaults.timeout = 8000;

###本地集成mockjs
    cnpm i mockjs --save-dev

###vue中使用swiper
    安裝 cnpm install vue-awesome-swiper --save

###插槽
新版本插槽 
Modal中用 ```<slot name="body"></slot>``` 定义，
使用的话:
```
<Modal
            title="提示"
            sureText="查看购物车"
            btnType="1"
            modalType="middle"
            v-bind:showModal="true">
        <template v-slot:body>
            <p>商品添加成功！</p>
        </template>
</Modal>
```
 需要用 ```<template v-slot:body> </template>```标签包上
 
 ###父子组件点击事件
 ```v-on:click="$emit('submit')```
 子组件点击事件需要传到父组件，父子传递是用emit传递，调用父组件的submit，所以在父组件中定义 @submit="goToCart"
 
 ###动画顺序
    slide-enter需要放在 active下面
    &.slide-enter {
        top: -100%;
    }
    
###组件延迟
    先加载app.vue组件 然后加载navheader组件，computed解决延迟问题
     computed:{
                username(){
                    return this.$store.state.username;
                }
            },

###...mapActions与...mapState
	import {mapActions} from 'vuex';
	...mapActions
	getUser() {
	    this.axios.get('/user').then((res) => {
	        // todo  保存到vuex里面
	        // this.$store.dispatch('saveUserName', res.username);
			this.saveUserName(res.username);
	    })
	},
	getCartCount() {
	    this.axios.get('/carts/products/sum').then((res) => {
	        // this.$store.dispatch('cartCount', res);
			this.cartCount(res);
	    })
	},
	...mapActions(['saveUserName','cartCount'])
	
	import {mapState} from 'vuex';
	...mapState:
	computed:{
	    // username(){
	    //     return this.$store.state.username;
	    // },
	    // cartcount(){
	    //     return this.$store.state.cartcount;
	    // },
	    ...mapState(['username','cartcount'])
	},
