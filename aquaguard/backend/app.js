const express = require('express');
const connectDB = require('./db/db');
const path = require('path');
const cors = require('cors');
const app = express();

connectDB;
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(3000,()=>{
    console.log('Servidor escuchando en https://localhost:3000');
});