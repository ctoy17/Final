const express = require('express');
const router = express.Router();
const commentCtrl = require('../../controllers/api/comment');


router.get('/', commentCtrl.commentList);
router.post('/', commentCtrl.addComment);
router.delete('/:id', commentCtrl.deleteComment);
router.post('/:id', commentCtrl.updateComment)

module.exports = router;