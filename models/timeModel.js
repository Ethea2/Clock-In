const mongoose = require('mongoose')

const Schema = mongoose.Schema

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to get the correct month (0-indexed)
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };

const timeSchema = new Schema({
    userRef: {
        type: Schema.Types.ObjectId,
        required: true
    },
    timein: {
        type: Date,
        required: false,
        default: new Date()
    }, 
    timeout: {
        type: Date,
        required: false
    }, 
    hours: {
        type: Number,
        required: false
    },
    date: {
        type: String,
        default: formatDate(new Date()),
        required: true
    }
}, { timestamps: true })

const Time = mongoose.models.Time || mongoose.model('Time', timeSchema)
export default Time