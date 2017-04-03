const mongoose = require('mongoose');
const PhotographerSchema = require('../schemas/photographer');

const Photographer = mongoose.model('Photographer', PhotographerSchema);

module.exports = Photographer;
