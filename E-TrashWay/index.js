const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const conn = require('./db/conn')
const { response } = require('express')
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

conn
  .sync()
  .then(() => {
    app.listen(3333)
  })
  .catch(() => console.log(err))
