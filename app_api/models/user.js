var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose').default;

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true }
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('users', userSchema);
