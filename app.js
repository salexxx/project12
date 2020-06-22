
const express = require('express');
const app = express();
const usersrouter = require('./routes/users.js');
const cardsrouter = require('./routes/cards.js');

const { PORT = 3000 } = process.env;

app.use(express.static(__dirname + '/public'));

app.use('/users', usersrouter);
app.use('/users/:id', usersrouter);
app.use('/cards', cardsrouter);

app.use(function(req, res) {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});

