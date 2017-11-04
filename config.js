'use strict';

module.exports = {
    /**
     * Node 服务器启动端口，如果是自行搭建，请保证负载均衡上的代理地址指向这个端口
     */
    port: '80',
    development:{
        sql: {
            dbname: 'tucao',
            username: 'root',
            password: '123456',
            dbType: {
                host: 'localhost',
                dialect: 'mysql',
            }
        }
    },
    production:{
        sql: {
            dbname: 'tucao',
            username: 'root',
            password: 'BBBBBDJMekkP1z',
            dbType: {
                host: '172.17.0.2',
                dialect: 'mysql',
            }
        }
    }

     
};
