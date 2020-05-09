const express = require('express');
const router = express.Router();
const TodoList = require('.assessment/models/todos.js');

router.get('/', (req, res) => {
            res.render('Index', {
               
            })
        })
   
module.exports = router;