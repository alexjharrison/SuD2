const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()

const HOST = process.env.HOST
const PORT = process.env.PORT

app.use(express.static(path.join(__dirname,'./src')))

app.listen(`${PORT}`,()=>console.log(`Listening at ${PORT}`))

