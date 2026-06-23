var User = require('../models/user');
var jwt = require('jsonwebtoken');

var jwtSecret = 'travlrSecret1234';

var register = function(req, res) {
  User.register(
    new User({ email: req.body.email }),
    req.body.password,
    function(err, user) {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      var token = jwt.sign({ email: user.email }, jwtSecret, { expiresIn: '1h' });
      res.status(200).json({ token });
    }
  );
};

var login = function(req, res) {
  var token = jwt.sign({ email: req.user.email }, jwtSecret, { expiresIn: '1h' });
  res.status(200).json({ token });
};

module.exports = { register, login };
