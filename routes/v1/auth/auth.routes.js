const express = require('express');
const router = express.Router();

const sendEmail = require('./../../../services/v1/tools/email.tools');

const auth  = require('./../../../services/v1/user/auth.svc'); 
const {registerVld}   = require('./../../../validators/user/register.vld');
const {customValidationResult}    = require('./../../../validators/customValidationResult');

const {obtainToken} = require('../../../services/v1/oauth2/oauth2-adapter');

router.post('/login',obtainToken)
router.post('/register', registerVld, customValidationResult,  auth.register);
router.get('/register', auth.findAll);
router.get('/email', sendEmail);

module.exports = router;