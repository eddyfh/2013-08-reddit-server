var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

module.exports = function(app, config) {
  var db = mongoose.connect(config.db);
  var userSchema = new Schema({
  	username: 'string',
  	// email: 'string',
  	password: 'string'
  });
	userSchema.methods.validPassword = function (password) {
  if (password === this.password) {
    return true; 
  } else {
    return false;
  }
}
  var User = mongoose.model('User', userSchema);
  var user = new User({ username: 'bob', password: 'bobo' });
	user.save();
  // var user = new User({ username: 'bob', password: 'secret' });
  // user.save(function(err) {
  // 	if (err) {
  // 		console.log(err);
  // 	} else {
  // 		console.log('user '+user.username+' saved, pass is '+user.password);
  // 	}
  // });

  return db;
}