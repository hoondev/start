const mongoose = require('mongoose')

module.exports = connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
        console.log("Connecting status: " + mongoose.connection.readyState);
    } catch (error) {
        throw error
    }
}