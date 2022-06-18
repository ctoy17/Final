const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// POST /api/users/coach
router.get('/coach', usersCtrl.index);
router.get('/coach/:id', usersCtrl.profile);


module.exports = router;

