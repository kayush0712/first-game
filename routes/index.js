var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/game', function(req, res, next) {
  res.render('game');
});

router.get('/3', function(req, res, next) {
  res.render('3');
});

router.get('/6', function(req, res, next) {
  res.render('6');
});
router.get('/7', function(req, res, next) {
  res.render('7');
});
router.get('/9', function(req, res, next) {
  res.render('9');
});
router.get('/10', function(req, res, next) {
  res.render('10');
});
router.get('/10', function(req, res, next) {
  res.render('10');
});
router.get('/10', function(req, res, next) {
  res.render('10');
});
router.get('/deadhole', function(req, res, next) {
  res.render('deadhole');
});
router.get('/Phaser', function(req, res, next) {
  res.render('Phaser');
});

router.get('/Racing', function(req, res, next) {
  res.render('Racing');
});
router.get('/message', function(req, res, next) {
  res.render('message');
});


module.exports = router;
