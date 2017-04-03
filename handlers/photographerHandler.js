const photographerService = require('../services/photographerService');

function renderPhotographerPage(req, res, next) {
  return photographerService.getPhotographerById(req.params.id)
    .then(data => {
      res.send(data);
    });
}

module.exports = {
  renderPhotographerPage: renderPhotographerPage
}
