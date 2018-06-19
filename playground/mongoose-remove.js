const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoos');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// 
/* Todo.remove({}).then((result) => {
  console.log(result);
}); */

/* Todo.findOneAndRemove({
  _id: '5b286aa9b1134f11356b8e89'
}).then((result) => {
  console.log(result);
}); */

/* Todo.findByIdAndRemove('5b286aa9b1134f11356b8e89').then((todo) => {
  console.log(todo);
}); */