require('dotenv').config()
const express = require('express')
const app = express()
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const user = require('./routes/users')
const item = require('./routes/item')

mongoose.connect('mongodb://localhost:27017/inventory_db')

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/users', user)
app.use('/items', item)


app.listen(3000, ()=>{
    console.log('express');
})