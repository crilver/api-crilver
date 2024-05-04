const { Router } = require("express")
const router = Router()

const { getAllNotes, getNoteById, updateNoteById, createNote } = require("../controllers/notes.controller")

router.get('/note', getAllNotes)

router.get('/note/:id', getNoteById)

router.patch('/note/:id', updateNoteById)

router.post('/note', createNote)

module.exports = router