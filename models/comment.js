const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    details: {type: String, required: true},
    user: {type: mongoose.Types.ObjectId, ref: 'User'}
},  {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            return ret;
        }
    }
});

module.exports = mongoose.model('Comment', commentSchema);