require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json({ type: 'application/json' }))

//Mongoose middleware

mongoose.connect(`mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PW}@ds111851.mlab.com:11851/${process.env.MLAB_DB}`, { useNewUrlParser: true } );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
    console.log(`Connected to mLab ${process.env.MLAB_DB}`)
});



const todos = require('./routes/api/todos')

app.use('/api/todos', todos)

app.listen(port, () => console.log(`Server started on port ${port}`));