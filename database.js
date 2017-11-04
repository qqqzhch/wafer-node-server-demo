var Sequelize = require('sequelize');
var env = process.env.NODE_ENV||'production',
config = require('./config')[env ];
console.log('huanjingbianliang');
console.log(env);
console.log(config );
module.exports = new Sequelize(
	config.sql.dbname,
	config.sql.username,
	config.sql.password,
	 {
		host: config.sql.dbType.host,
		dialect: config.sql.dbType.dialect,
		logging: false,
		pool: {
			max: 50,
			min: 0,
			idle: 10000
		}
	}

);