import mongoose from 'mongoose'

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB)
        console.log("Connected to MongoDB successfully!")
    } catch(e) {
        console.log(e)
    }
}

export default connectMongoDB