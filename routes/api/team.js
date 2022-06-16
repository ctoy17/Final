const express = require('express');
const router = express.Router();
const teamCtrl = require('../../controllers/api/team');


router.get('/', teamCtrl.teamList);
router.post('/', teamCtrl.createTeam);
router.delete('/:id', teamCtrl.removeTeam);
router.post('/:id', teamCtrl.updateTeam)

module.exports = router;