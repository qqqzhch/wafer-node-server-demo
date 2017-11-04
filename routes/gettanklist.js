'use strict';

const LoginService = require('qcloud-weapp-server-sdk').LoginService;
let tank=require('../model/tank')

module.exports = (req, res) => {
    LoginService.create(req, res).login().then(result => {
        tank
        .findAll({ limit: 30 ,order:[   ['createdAt', 'DESC']  ]})
        .then(function  (data) {
        	   res.json(data);
                })
        })
    };
};