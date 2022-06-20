const express = require('express');
const router = express.Router();
const practicePlanCtrl = require('../../controllers/api/practiceplan');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/create', ensureLoggedIn, practicePlanCtrl.createPractice);
router.get('/practices', practicePlanCtrl.getAllPractices);
router.get('/coach', practicePlanCtrl.getCoachPractices);
router.get('/coach/:id',ensureLoggedIn, practicePlanCtrl.viewDetails);
router.delete('/coach/:id', ensureLoggedIn, practicePlanCtrl.removePractice);
router.post('/coach/:id', ensureLoggedIn, practicePlanCtrl.updatePractice);

module.exports = router;


