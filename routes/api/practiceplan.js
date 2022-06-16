const express = require('express');
const router = express.Router();
const practicePlanCtrl = require('../../controllers/api/practiceplan');


router.get('/', practicePlanCtrl.practiceList);
router.post('/', practicePlanCtrl.createPracticePlan);
router.delete('/:id', practicePlanCtrl.removePracticePlan);
router.post('/:id', practicePlanCtrl.updatePractice)

module.exports = router;