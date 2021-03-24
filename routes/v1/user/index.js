const express = require('express');
const router = express.Router();

const User  = require('../../../services/v1/user/profile.svc'); 

router.get('/profile', User.profile)

module.exports = router;