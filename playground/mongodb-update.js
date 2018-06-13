const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to MongoDB server');

  /* db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b164c828d80d44c7a5e98b8')
  }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    }); */

  db.collection('Users').findOneAndUpdate({
    name: 'Abhi'
  }, {
      $inc: {
        age: 2
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    })
  // db.close();
});
