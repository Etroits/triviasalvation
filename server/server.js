const express = require('express');
const app= express();
const cors = require('cors');
const {Pool, Client}= require('pg');
const connectionString = 'postgresql://postgres:123456@localhost:5432/trivia_db';

const client = new Client({
    connectionString:connectionString
})

client.connect()

client.query('SELECT * from users', (err,res)=>{
    console.log(err,res);
    client.end()
})

//middleware

app.use(express.json()) //req.body
app.use(cors());

//Routes

app.listen(5000, () =>{
    console.log('voy corriendo a 5mil')
})