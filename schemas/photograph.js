const Schema = require('mongoose').Schema;
const ObjectId = Schema.ObjectId;

const Photograph = new Schema({
  name: String,
  id: ObjectId,
  portfolio: Array
});
