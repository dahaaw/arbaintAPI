const initModels = require('./init-models');
var dbConnect = require('./../config/db.connect');
const sequelize = dbConnect();

const runModel = () => {
    return initModels(sequelize);
}

module.exports = runModel;