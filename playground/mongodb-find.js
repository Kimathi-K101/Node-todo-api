//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Last slash is the database to connect to. Can create a new one
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b91b0171927a9275c32ea45')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  db.collection('Users').find({name: 'John Smith'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs,undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  //client.close();
});
