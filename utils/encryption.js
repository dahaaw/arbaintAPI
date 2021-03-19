const sha1 = require('sha1')
const runModel = require('../models');
const db = runModel();

// CREATE SALT
const uyah = () => {
    const uyah = Math.random().toString(36).substr(2, 9).toUpperCase();
    return uyah;
}
exports.uyah = uyah;

// FOR ENCRYPT PASSWORD
const encPass = (pass, salt) => {
    const encPass = sha1('MDHASH'+salt+sha1('USERHASH'+salt+sha1(pass)));
    // console.log(encPass)
    return encPass;
}
exports.encPass = encPass;

const createToken = async (idUser, category) => {
    const token = Math.random().toString(36).substr(2, 13);
    const data = {
        idUser,
        token,
        category,
        used:0
    }
    const dataToken = await db.user_token.create(data);
    return dataToken;
}
exports.createToken = createToken;

// GET SALT AND PASSWORD
const getUyPass = async (wherenya) => {
    const user = await db.users.findOne({
        where:wherenya,
        attributes:  ['password','salt'] 
    });
    return user;
}
exports.getUyPass = getUyPass;