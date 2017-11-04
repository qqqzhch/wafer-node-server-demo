'use strict';

const LoginService = require('qcloud-weapp-server-sdk').LoginService;
let userinfo=require('../model/userinfo')

module.exports = (req, res) => {
console.log('微信用户信息 ceshi ')
    LoginService.create(req, res).login().then(result => {
        console.log('微信用户信息', result.userInfo);
        userinfo
        .findOrCreate({where: {openID: result.userInfo.openID}, defaults: result.userInfo})
    });
};