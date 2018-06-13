const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  /* db.collection('Todos').deleteMany({ text: 'Eat pathiri' }).then((result) => {
    console.log(result);
  }); */
  //deletOne

  /* db.collection('Todos').deleteOne({ text: 'Eat pathiri' }).then((result) => {
    console.log(result);
  }); */

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({
    text: 'Eat pathiri'
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});