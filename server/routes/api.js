var express = require('express');
var router = express.Router();
var Guitar = require('../models/guitar.js');
// var mongoose = require('mongoose-q')(require('mongoose'),{spread:true});


// POST ONE guitar
router.post('/guitars', function(req, res, next) {
  new Guitar ({
    name: req.body.name,
    model: req.body.model,
    no_strings: req.body.no_strings
  })

  .saveQ()
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// GET ONE guitar
router.get('/guitar/:id', function(req, res, next) {
  Guitar.findByIdQ(req.params.id)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// GET ALL guitars
router.get('/guitars', function(req, res, next) {
  Guitar.findQ()
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// PUT ONE guitar
router.put('/guitar/:id', function(req, res, next) {
  Guitar.findByIdAndUpdateQ(req.params.id, req.body)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// DELETE ONE guitar
router.delete('/guitar/:id', function(req, res, next) {
  Guitar.findByIdAndRemoveQ(req.params.id)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});








module.exports = router;
