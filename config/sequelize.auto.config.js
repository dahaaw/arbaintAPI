var dbcon  = require("../config/db.config")

'use strict';

const child_process = require('child_process');
const { exec } = child_process;
const modelName = process.argv[2];
const database = {
  host      : dbcon.HOST,
  database  : dbcon.DB, 
  user      : dbcon.USER,
  pass      : dbcon.PASSWORD,
  port      : 3306,
  config    : '',
  output    : './models',
  dialect   : 'mysql',
  additional: '',
  tables    : modelName || '',
  'skip-tables': '',
  camel     : true,
  'no-write': false,
  schema    : false,
  typescript: false,
};
 
let connectShell = 'sequelize-auto';
for (const i in database) {
  const value = database[i];
  if (value) {
    if (value === true) {
      connectShell += ` --${i}`;
    } else {
      connectShell += ` --${i} ${value}`;
    }
  }
}
exec(connectShell, (err, stdout, stderr) => {
  console.log(`stderr: ${stderr}`);
  console.log(`stdout: ${stdout}`);
  if (err) {
    console.log(`exec error: ${err}`);
  }
});