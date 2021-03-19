const { check } = require("express-validator");

exports.registerVld = [
    check('username')
        .trim()
        .not()
        .isEmpty()
        .withMessage('username harus diisi !'),

    check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('email harus diisi !')
        .normalizeEmail()
        .isEmail()
        .withMessage('masukkan email dengan benar'),
    
    check('fullname')
        .trim()
        .not()
        .isEmpty()
        .withMessage('nama lengkap depan harus diisi !')
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('nama lengkap depan harus alfabet.'),

    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage("password harus diisi !")
        .isLength({min:8})
        .withMessage("password min 8 characters long!"),

    check('repassword')
        .trim()
        .not()
        .isEmpty()
        .withMessage("konfirmasi password harus diisi !"),
    check('birthdate')
        .trim()
        .not()
        .isEmpty()
        .withMessage('tanggal lahir harus diisi !')
        .isISO8601()
        .toDate()
        .withMessage('periksa kembali tanggal lahir'),

    check('gender')
        .trim()
        .not()
        .isEmpty()
        .withMessage('gender harus diisi !')
]; 

