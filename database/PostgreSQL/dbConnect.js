const {Client} = require('pg');

const client = new Client({
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB
})

client.connect((err) => {
    if(!err) {
        console.log('db conected!')
    } else {
        console.log(err)
    }
})

Object.defineProperty(Client, 'conn', {value: client});