const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Album = require('../models/album');

router  
  .get('/', (req, res, next) => {
    Album.find({}).lean()
    .then(albums => res.send(albums))
    .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Album(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Album.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  });

module.exports = router;
