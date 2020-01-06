//基于cors跨域的配置
let baseURL;

//process.env  获取当前nodejs进程的环境变量
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default :
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}

export default {
    baseURL
}
