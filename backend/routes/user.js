const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth')

router.post('/register',  userCtrl.register);
router.post('/login',  userCtrl.login);
router.get('/', auth,   userCtrl.getAllUserGroup);
router.get('/:id', auth, userCtrl.getOneUserGroup);

module.exports = router;