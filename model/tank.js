var sequelize = require('../database');
var Sequelize = require('sequelize');
module.exports =sequelize.define('tank', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
     nickName: Sequelize.STRING(100),
    userid:Sequelize.BIGINT,   
    gender: Sequelize.STRING(10),
    city: Sequelize.STRING(10),
    description: Sequelize.TEXT,
    createdAt: Sequelize.DATE
    
   
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

