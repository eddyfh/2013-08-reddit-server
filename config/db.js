var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

module.exports = function(app, config) {
  var db = mongoose.connect(config.db);
  var schema = new Schema({
  	username: 'string',
  	password: 'string'
  });
  var User = mongoose.model('User', schema);

  return db;
}