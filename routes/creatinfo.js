'use strict';

const LoginService = require('qcloud-weapp-server-sdk').LoginService;

var tank=require('../model/tank')

module.exports = (req, res) => {
    const loginService = LoginService.create(req, res);
  var content=req.body.input;
  console.log(content);

    loginService.check()
        .then(data => {
            // data.userInfo

             tank.build(Object.assign({description: content},data.userInfo))
             .save()
             .then(function  (argument) {
                 // body...
                 res.json({
                        'code': 1,
                        'message': 'ok'
                    });
             })
            .catch(error => {
                // Ooops, do some error-handling
                res.json({
                        'code': 0,
                        'message': error
                    });
                })

            
        });
};