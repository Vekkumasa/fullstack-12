const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const redis = require('../redis');

router.get('/statistics', async (req, res) => {
  const count = await redis.getAsync("added_todos")
  const countObject = {
    added_todos: count? count : 0
  }
  res.send(countObject)
})

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  let count = parseInt(await redis.getAsync("added_todos"))
  await redis.setAsync("added_todos", count? count + 1 : 1)
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.send(req.todo)
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const { text, done } = req.body
  const todo = await Todo.findOneAndUpdate({ text: req.todo.text }, { text: text, done: done})
  res.send(todo)
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
