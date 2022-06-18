const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: {type: String, required: true},
    sport: {type: String, required: true},
    coach: {type: Schema.Types.ObjectId, ref: 'Coach'},
    practices: [{type: Schema.Types.ObjectId, ref: 'Practice'}]
},  {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            return ret;
        }
    }
});

module.exports = mongoose.model('Team', teamSchema);