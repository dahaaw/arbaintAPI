const { check } = require("express-validator");

exports.registerVld = [
    check('username')
        .trim()
        .not()
        .isEmpty()
        .withMessage('username is required!'),

    check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('email is required')
        .normalizeEmail()
        .isEmail()
        .withMessage('correct your email'),

    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage("password is required!")
        .isLength({min:8})
        .withMessage("password min 8 characters long!"),

    check('repassword')
        .trim()
        .not()
        .isEmpty()
        .withMessage("repassword is required!"),
    
    check('first')
        .trim()
        .not()
        .isEmpty()
        .withMessage('first is required!')
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Name must be alphabetic.'),

    check('last')
        .trim()
        .not()
        .isEmpty()
        .withMessage("last is required!")
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Name must be alphabetic.'),
         
    check('birthdate')
        .trim()
        .not()
        .isEmpty()
        .withMessage('birthdate is required')
        .isISO8601()
        .toDate()
        .withMessage('correct birthdate'),

    check('gender')
        .trim()
        .not()
        .isEmpty()
        .withMessage('gender is required')
]; 

