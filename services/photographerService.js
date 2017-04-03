const mongoose = require('mongoose');
const Photographer = require('../models/photographer');

function getPhotographerById(id) {
  return Photographer.find({id: id}, data => {
    return data;
  });
}

module.exports = {
  getPhotographerById: getPhotographerById
}
