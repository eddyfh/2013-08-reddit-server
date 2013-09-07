var mongoose        = require('mongoose'),
    User            = mongoose.model('User'),
    LocalStrategy   = require('passport-local').Strategy;

module.exports = function(app, config) {
  var passport = app.get('passport');
	passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd'
  },
	  function(username, password, done) {
	    User.findOne({ username: username }, function(err, user) {
	      if (err) { return done(err); }
	      if (!user) {
	        return done(null, false, { message: 'Incorrect username.' });
	      }
	      if (!user.validPassword(password)) {
	        return done(null, false, { message: 'Incorrect password.' });
	      }
	      return done(null, user, { message: 'Good'});
	    });
	  }
	));
  // Implement the passport local strategy
  
}