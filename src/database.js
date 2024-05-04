const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/api-crilver")
.then(db => console.log("DataBase is connected"))
.catch(err => console.log(err));