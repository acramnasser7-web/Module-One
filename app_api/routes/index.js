var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');

var tripsController = require('../controllers/trips');
var authController = require('../controllers/authentication');

var jwtSecret = 'travlrSecret1234';

var jwtAuth = function(req, res, next) {
  var authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  var token = authHeader.split(' ')[1];
  try {
    req.user = jwt.verify(token, jwtSecret);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

router.post('/register', authController.register);
router.post('/login',
  passport.authenticate('local', { session: false }),
  authController.login
);

router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(jwtAuth, tripsController.tripsAddTrip);

router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindCode)
  .put(jwtAuth, tripsController.tripsUpdateTrip)
  .delete(jwtAuth, tripsController.tripsDeleteTrip);

module.exports = router;
