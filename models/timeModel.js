const mongoose = require('mongoose')

const Schema = mongoose.Schema

const timeSchema = new Schema({
    userRef: {
        type: Schema.Types.ObjectId,
        required: true
    },
    time: [{
        timein: [{
            type: Date,
        }],
        timeout: [{
            type: Date
        }]
    }]
}, { timestamps: true })

const Time = mongoose.models.Time || mongoose.model('Time', timeSchema)
export default Time