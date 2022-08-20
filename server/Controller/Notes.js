const notesModel = require("../DataBase/Models/Notes")

const getNotes = async (req, res) => {
    const Notes = await notesModel.find({ user: req.user._id })
    res.json(Notes)
}


const createNotes = async (req, res) => {
    const { title, content, category } = req.body

    const Note = await notesModel.create({ title, content, category })
    // const createdNote = Note.save()
    res.status(201).json(Note)
}


module.exports = { getNotes, createNotes }