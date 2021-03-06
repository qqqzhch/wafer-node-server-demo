
var sequelize = require('../database');
var Sequelize = require('sequelize');
module.exports =sequelize.define('userinfo', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    openId: {
        type: Sequelize.STRING(100),
         unique: true,
      },
    nickName: Sequelize.STRING(100),
    avatarUrl : Sequelize.STRING(200),
    gender : Sequelize.STRING(10),
    province: Sequelize.STRING(10),
    city: Sequelize.STRING(10),
    country: Sequelize.STRING(10),
   
}, {
    // freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: true, // timestamps will now be true
    indexes: [{
        name: 'caiji_index',
        method: 'BTREE',
        fields: ['gender']
    }, {
        name: 'yuyan_index',
        method: 'BTREE',
        fields: ['city']
    }, {
        name: 'id_index',
        method: 'BTREE',
        fields: ['id']
    }]
});

