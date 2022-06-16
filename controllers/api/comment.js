const Comment = require('../../models/comment');

module.exports = {
    commentList,
    addComment,
    deleteComment,
    updateComment
};

async function commentList(req, res){
    const comments = await Comment.find({});
    res.json(comments)
};

async function addComment(req, res){
    const practiceComment = req.body
    try{
        const publish = await Comment.create(practiceComment);
        res.status(200).json(publish)
    }catch(error){
        res.status(400).json(error)
    }
};
async function deleteComment(req, res){
    const id = req.params.id;
    await Comment.findByIdAndDelete(id)
    res.status(204).end()
}

async function updateComment(req, res){
    const id = req.params.id;
    const comment = req.body;
    const commentData = {
        details: comment.details
    }
    const updateTeam = await Comment.findByIdAndUpdate({_id: id}, commentData)
    res.json(updateTeam)
};