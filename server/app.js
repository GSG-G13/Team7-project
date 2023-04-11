

require('dotenv').config()

const express = require('express')

const path = require('path')

const router = require('./controller/index')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, '..', 'public')))

app.set('port', process.env.PORT || 3200)

app.use(router)


module.exports = app;