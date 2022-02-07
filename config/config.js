/**
 * 描述: 数据库基础配置
 */

const config = {
    host: 'localhost', // 主机名称, 一般是本机
    port: 3306, // 数据库端口号, 如果不设置, 默认为3306
    user: 'root', // 创建数据库时设置用户名
    password: '123456', // 创建数据库时设置密码
    database: 'appletService', // 创建的数据库
    connectTimeout: 5000 // 连接超时
}

module.exports = config;