const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_ATLAS_CONNECTION_URI.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        console.log(`Connection successfully with ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDb
