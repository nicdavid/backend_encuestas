const database = require('./config/db')();
const helmet = require('helmet');
const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(helmet());
app.use(cors());

// TU CONEXION AQUI VERIFICA DOCUMENTACION DE SEQUELIZE

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', require('./routes/main'));


app.listen(port, function() {
    console.log(`Http server (on http://localhost:${port}): \x1b[32m%s\x1b[0m`, 'Running');
});