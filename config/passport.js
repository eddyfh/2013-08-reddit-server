var mongoose        = require('mongoose'),
    User            = mongoose.model('User'),
    LocalStrategy   = require('passport-local').Strategy;

module.exports = function(app, config) {
  var passport = app.get('passport');
  passport.serializeUser(function(user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function(obj, done) {
	  done(null, obj);
	});



	passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.validPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }


));
  // FIGURE OUT THIS PART!!!
  passport.signup = function(req, res) {
    User.findOne({username: req.body.username}, function(err, user) {
      if (err) {
        res.send(500, {message: 'Failed to save user to database'});
      } else if ( !user ) {
        //create the user
        User.create({username: req.body.username, password: req.body.password}, function(err, user) {
          if( err ){
            res.send(500, {message: 'Failed to save user to database'});
          } else {
            passport.authenticate('local', {
              successRedirect: '/',
              failureRedirect: '/login'
            })(req, res);
          }
        });
      } else {
        //user already exists
        res.send(403, {message: 'User already exists'});
      }
    });
  };
};