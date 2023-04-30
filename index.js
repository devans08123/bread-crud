const express = require('express')
require('dotenv').config()
const breadControllers = require('./controllers/bread')
const app = express()

const PORT = process.env.PORT

// routs
app.use('/breads', breadControllers)

app.listen(PORT, console.log(`listening on port ${PORT}`))