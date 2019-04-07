const express = require('express')
const router = express.Router()



//Todo Model
const Todo = require('../../models/todo')

//To avoid CORS issues with front-end requests
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function (req, res) {
  Todo.find()
      .then(response => res.json(response))
      .catch(err => console.log(err))
})

//Post todo
router.post('/', (req, res) => {
  const newTodo = new Todo({
      title: req.body.title,
      completed: req.body.completed
  })
  newTodo.save()
    .then(todo => res.send(todo))
    .catch(err => console.log(err))
})

//Delete todo
router.delete('/:id', (req, res) => {
Todo.deleteOne({_id: req.params.id})
    .exec()
    .then(result => res.status(200).json({result}))
    .catch(err => console.log(err))
})

//Change completed status
router.put('/:id', (req, res) => {
Todo.findOne({_id:req.params.id}, (err, todo) => {
    todo.completed = !todo.completed;
    todo.save((err, response) => {
        if(err){
            console.log(err)
        }
        console.log(response);
    })
})
    
})

module.exports = router