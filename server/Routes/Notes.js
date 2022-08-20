const express = require('express')
const { getNotes, createNotes } = require('../Controller/Notes')
const { protect } = require('../MIddleWare/authMiddle')

const router = express.Router()

router.get("/api/notes/get", getNotes)
router.post("/api/notes/create", createNotes)
// router.post("/api/notes/:id", createNote).

module.exports = router