const express = require("express")
const cors = require("cors")
require('dotenv').config()

const app = express()

const corsOptions= {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // For legacy browsers
}

app.use(cors(corsOptions))

app.get("/getUser", (req, res)=>{
    return res.json({"test": "Users"})
})

app.listen(3000, ()=>{
    console.log("Listening");
})

