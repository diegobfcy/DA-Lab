const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(cors());

app.listen('3000', ()=>{
    console.log('Servidor e ejecuccion');
})

const bookRouter = require('./routes/books');
app.use('/api',bookRouter);