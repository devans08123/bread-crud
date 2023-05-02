const express = require('express')
require('dotenv').config()
const breadControllers = require('./controllers/bread')
const app = express()

const PORT = process.env.PORT

//middleware 
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// routs
app.use('/breads', breadControllers)

app.listen(PORT, console.log(`listening on port ${PORT}`))