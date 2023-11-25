require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const tasks = require('./routes/route');
const connectDB = require('./database/db');
const NotFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');


app.use(express.json())

app.use('/api/v1/tasks',tasks)
app.use(NotFound)
app.use(errorHandler)

app.listen(port,()=>{
    connectDB(process.env.MONGO_URI)
    .then(()=>console.log(`Connected Sucessfully and listening on port ${port}`))
    .catch((e)=>console.log(e.message))
}) 