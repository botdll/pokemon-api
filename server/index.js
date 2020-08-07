const express = require('express')
const cors = require('cors')
const pool = require('./db')
const express = require('express')

const app = express()
const port = 3000

app.use(cors())




app.listen(port, () => console.log(`Node server has started on port: ${port}`))