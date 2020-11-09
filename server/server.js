const express = require('express')
const app = express()

const connectDB = require('./config/db')

// Connect to database

connectDB()


//Init Middlewares
app.use(express.json({extended: true}))


// define routes
app.use('/registeradminlion', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/student_register', require('./routes/studentregister'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server sarted at port ${PORT}`)) 