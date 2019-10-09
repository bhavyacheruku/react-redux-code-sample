// make a BaseService class to handle all the external api calls from a single function.

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3050;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const todoList = [];
const categories = ['Entertainment', 'Work', 'Personal'];

app.get('/api/getAllTodos', (req, res) => {
    try {        
         res.send(todoList);
    } catch (e) {
        res.status(400).send(e)
    }
 });

app.post('/api/addTodos', (req, res) => {
   try {
        const request = req.body;
        if(!(request && request.category && request.item)) res.status(400).send("Missing Parameters");
        const obj = {
            category: request.category, 
            item: request.item,
            status: 'new'
        }
        todoList.push(obj);
        res.send(todoList);
   } catch (e) {
       res.status(400).send(e)
   }
});

app.get('/api/getCategories', (req, res) => {
    try {
        res.send(categories);
    } catch (e) {
        res.status(400).send(e)
    }
 });

app.put('/api/updateTodoStatus', (req, res) => {
    try {
        const request = req.body;
        if(!(request && typeof request.itemIndex === 'number' && request.status)) res.status(400).send("Missing Parameters"); 
        todoList[request.itemIndex].status = request.status;
        res.send(todoList);
    } catch (e) {
        res.status(400).send(e)
    }
 });


 app.listen(port, () => console.log('App is listening on port ' + port));
