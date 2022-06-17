const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const practiceSchema = new Schema({
    team:{type: Schema.Types.String, ref: 'Team'},
    username:{type: Schema.Types.ObjectId, ref: 'User'},
    date:{type: String, required: true},
    equipment:{type: String, trim: true},
    startTime:{type: String, required: true},
    endTime:{type: String, required: true},
    drill:{type: String, trim: true},
    announcement:{type: String, trim: true}
    
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            return ret;
        }
    }
});

module.exports = mongoose.model('Practice', practiceSchema);