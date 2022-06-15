const express = require('express');
const router = express.Router();
const practicePlanCtrl = require('../../controllers/api/practiceplan');


router.get('/practice', practicePlanCtrl.practiceScheduleList);
router.post('/practice', practicePlanCtrl.createPracticePlan);
router.delete('/practice/:id', practicePlanCtrl.removePracticePlan);
router.put('/practice/:id', practicePlanCtrl.updatePractice)

module.exports = router;