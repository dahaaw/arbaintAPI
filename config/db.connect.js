const dbConfig = require('./db.config')
const dbConnect = () => {
    console.log('connecting database . . . ')
    const Sequelize = require("sequelize")
    const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorAliases: false,
        timezone: 'Asia/Jakarta',
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    });
    return sequelize;
}
module.exports = dbConnect;