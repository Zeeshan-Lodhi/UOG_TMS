const mongoose = require("mongoose")

const schema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            // unique: true
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        },
    },
    {
        timestamps: true
    },
)

const userModel = mongoose.model('Users', schema)
module.exports = userModel