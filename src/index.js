const app = require("./server");
require("./database");

app.listen(app.get("port"), () => {
    console.log("Hola mundo desde index")
})
