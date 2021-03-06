const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database')
const app = express();
const dash = require('./routes/dash')
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log('Connected to Mongo database ');
});

mongoose.connection.on('error', (err) => {
  console.log('Database Error ' + err);
});

app.use('/dash', dash)

app.get('/', (req, res) => {
  res.send('works')
})


app.listen(port, () => {
  console.log('Server started on port '+ port)
});
