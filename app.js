const express = require('express');
const app = express();
app.use(express.static('public'));

// Home
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
});

// About
app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html');
});

// Etapas
app.get('/etapas', (request, response) => {
    response.sendFile(__dirname + '/views/etapas.html');
});


app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
});