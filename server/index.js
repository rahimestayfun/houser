require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');

//controllers
const{getHouses,addHouse,deleteHouse} = require('./controller');
//dotenv
const {SERVER_PORT, CONNECTION_STRING}= process.env;
//app.use
app.use(express.json());

//db connection
massive(CONNECTION_STRING).then(db=>{
    app.set('db',db);
    console.log('DB connected');
});

//endpoints
app.get('/api/houses',getHouses);
app.post('/api/house',addHouse);
app.delete('/api/house/:id',deleteHouse);


app.listen(SERVER_PORT, ()=>console.log(`Server is on ${SERVER_PORT}`))
