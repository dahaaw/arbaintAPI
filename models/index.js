const initModels = require('./init-models');
var dbConnect = require('./../config/db.connect');
const sequelize = dbConnect();
// sequelize.sync();
// console.log("All models were synchronized successfully.");

const runModel = () => {
    return initModels(sequelize);
}

module.exports = runModel;