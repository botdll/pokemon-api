const express = require('express')
const cors = require('cors')
const pokeList = require('./db')

const app = express()
const port = 3000

app.use(cors())

pokeList()


app.listen(port, () => console.log(`Node server has started on port: ${port}`))