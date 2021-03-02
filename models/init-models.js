var DataTypes = require("sequelize").DataTypes;
var _user_address = require("./user_address");
var _user_token = require("./user_token");
var _users = require("./users");

function initModels(sequelize) {
  var user_address = _user_address(sequelize, DataTypes);
  var user_token = _user_token(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    user_address,
    user_token,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
