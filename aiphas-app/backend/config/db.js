const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        uri = process.env.MONGO_URI
        const conn = await mongoose.connect(uri)
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }       
}

module.exports = {
    connectDB
}