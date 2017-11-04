'use strict';

const LoginService = require('qcloud-weapp-server-sdk').LoginService;

module.exports = (req, res) => {
    LoginService.create(req, res).login().then(result => {
      console.log('wo dayin rizhi')
        console.log('微信用户信息', result.userInfo);
    });
};