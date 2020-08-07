const { Pool, Client } = require('pg')
const fetch = require('node-fetch')

const pool = new Pool({
    user: "postgres",
    password: "12345",
    host: "localhost",
    port: 5432,
    database: "pokeapi"
})

module.exports = pool