const mongoose = require("mongoose")

const schema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        user: {
            // Getting Objectid of the User from the user schema 
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Users"
        },
    },
    {
        timestamps: true
    },
)

const notesModel = mongoose.model('Notes', schema)
module.exports = notesModel