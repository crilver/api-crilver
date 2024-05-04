const Note = require("../models/Note")

const getAllNotes = async (req, res) => {
    try{
        const notes = await Note.find().sort({ title: -1, description: -1 });
        return res.status(200).send(notes)
    }catch(err){
        return res.status(err.status).json({
            message: err.message
        })
    }
    
}

const getNoteById =  async (req, res) => {
    const noteById = await Note.findById(req.params.id)
    res.status(200).send(noteById)
}

const updateNoteById = async (req, res) => {
    try{
        const id = req.params.id
        const title = req.body.title
        console.log(req.body.title)
        await Note.findByIdAndUpdate(id, {title})        
        return res.status(200).json({
                message:`Hola edicion json de id ${id} y titulo ${title}`
            })

    }catch(err){
        return res.status(err.status).json({
                message: err.message
            })
    }
    
}

const createNote = async (req, res) => {
    const { title, description} = req.body
    const newNote = new Note({title, description})
    await newNote.save()
    res.status(200).send("New Note Created")
}

module.exports = {
    getAllNotes,
    getNoteById,
    updateNoteById,
    createNote
}