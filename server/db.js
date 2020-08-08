const { Pool, Client } = require('pg')
const fetch = require('node-fetch')

const pool = new Pool({
    user: "postgres",
    password: "12345",
    host: "localhost",
    port: 5432,
    database: "postgres"
})

API_URL = 'https://pokeapi.co/api/v2/pokemon'

const pokeList = async (url = API_URL) => {
    console.log('fetching data...')
    let raw = await fetch(url)
    let data = await raw.json()
    console.log(data.next)

    for (let i = 0; i < data.results.length; i++) {
        await pool.query('INSERT INTO pokemons (name, url) values ($1, $2) ON CONFLICT (name) DO NOTHING', [data.results[i].name, data.results[i].url])
    }
 

    if (data.next) {
        pokeList(data.next)
    }
}
module.exports = pokeList