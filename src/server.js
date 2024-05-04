const express = require("express")

const port = 3030

//Initializations
const app = express()

//Settings
app.set("port", port)

//Middlewares
app.use(express.json())

//Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))

module.exports = app;