const express = require('express');
const router = express.Router();

const auth  = require('./../../../services/v1/user/auth.svc'); 
const {registerVld}   = require('./../../../validators/user/register.vld');
const {customValidationResult}    = require('./../../../validators/customValidationResult');

router.get('/register', registerVld, customValidationResult,  auth.register);
router.post('/register', auth.findAll);

module.exports = router;