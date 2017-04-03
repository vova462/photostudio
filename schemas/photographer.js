const Schema = require('mongoose').Schema;
const ObjectId = Schema.ObjectId;

const Photographer = new Schema({
  name: String,
  id: Number,
  portfolio: Array
}, {
  collection: 'Photographers'
});

module.exports = Photographer;
