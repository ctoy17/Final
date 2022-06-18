const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const practiceSchema = new Schema({
    coach:{type: Schema.Types.ObjectId, ref: 'Coach'},
    team:{type: Schema.Types.ObjectId, ref: 'Team'},
    date:{type: String, required: true},
    equipment:{type: String, trim: true},
    startTime:{type: String, required: true},
    endTime:{type: String, required: true},
    drill:{type: String, trim: true},
    announcement:{type: String, trim: true},
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            return ret;
        }
    }
});

    module.exports = mongoose.model('Practice', practiceSchema);