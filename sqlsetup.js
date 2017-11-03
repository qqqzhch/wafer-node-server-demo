var Sequelize = require('sequelize');

console.log('start')
gitRepo.sync({
    force: true
})
console.log('end')
