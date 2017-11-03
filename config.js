'use strict';

module.exports = {
    /**
     * Node 服务器启动端口，如果是自行搭建，请保证负载均衡上的代理地址指向这个端口
     */
    port: '5757',
     sql: {
            dbname: 'tucao',
            username: 'postgres',
            password: '123456',
            dbType: {
                host: 'localhost',
                dialect: 'mysql',
            }
        }
};
