const express =  require('express');
const bodyParser = require('body-parser');

const plantRoutes = require('./routes/plants');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methos', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-COntrol-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(plantRoutes);

app.listen(8080); 
