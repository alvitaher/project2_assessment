//dependencies
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const setController = require('./assessment/controller/todos.js');

//middlwware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use('/todos', setController);

//mongo connection
mongoose.connect('mongodb://localhost:27017/proj2ass', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
});


app.listen(3000, () => {
    console.log('connnected to server')
});