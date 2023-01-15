const mongodb = require('mongodb');
const Mongoclient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  Mongoclient.connect('mongodb+srv://chiragsharma:chirag123@cluster0.acneyj4.mongodb.net/?retryWrites=true&w=majority')
    .then(client => {
      console.log('Connected!');
      _db = client.db()
      callback(client);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  };
  throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;