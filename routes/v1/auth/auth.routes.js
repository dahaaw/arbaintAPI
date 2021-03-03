const express = require('express');
const router = express.Router();

const sendEmail = require('./../../../services/v1/tools/email.tools');

const auth  = require('./../../../services/v1/user/auth.svc'); 
const {registerVld}   = require('./../../../validators/user/register.vld');
const {customValidationResult}    = require('./../../../validators/customValidationResult');

router.get('/register', registerVld, customValidationResult,  auth.register);
router.post('/register', auth.findAll);
router.get('/email', sendEmail);

module.exports = router;