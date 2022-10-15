const { get } = require('http');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://editor:FamilyGuy@node-course.9vcclgg.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected!!!');
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }

  throw new Error('No database found!');
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
