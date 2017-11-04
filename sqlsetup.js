var Sequelize = require('sequelize');
var userinfo= require('./model/userinfo');
var tank= require('./model/tank');

console.log('start')
userinfo.sync({
    // force: true
})
// tank.sync({
//     // force: true
// })
console.log('end')
