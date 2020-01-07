//定义mock文件
import Mock from 'mockjs'

Mock.mock('/api/user/login', {
    "code": 0,
    "data": {
        "id|100-500": 0,
        "username": "@cname",
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})
