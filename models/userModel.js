const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false,
    },
    timeRef: {
        type: Schema.Types.ObjectId,
        required: false
    }
}, { timestamps: true })



const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User