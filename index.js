const express = require('express')
const PORT = process.env.PORT || 3000
const userRouter = require('./routes/user.routes')

const app = express()

//express по умолчанию не может распарсить json строку
//для этого ему нужно явно это указать
app.use(express.json())

// API ...
app.use('/api', userRouter)

// Server start ...
app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT} port`)
})