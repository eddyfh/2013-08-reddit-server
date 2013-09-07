var passport      = require('passport');

module.exports = function(app, config) {
   
  app.get('/test/news', function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    // res.setHeader('Content-Length', body.length);
    res.end();

  });
  app.get('/test/login', function(req, res, next) {
    console.log('hi');
    res.setHeader('Content-Type', 'text/plain');
  // res.setHeader('Content-Length', body.length);
    res.end();
    // var data = [];
    // console.log('tlaf');
    // // Implement login
    // req.on('data', function(chunk){
    //   data.push(chunk);
    // });
    // console.log(data);
    // res.setHeader('Content-Type', 'text/plain');
    // res.setHeader('Content-Length', body.length);
    // res.end();
  });


  // Setup API blockade
  app.all('/api/*', function(req, res, next) {
    // passport gives us a 'isAuthenticated' method
    // we'll check this method
    if (req.isAuthenticated()) return next();

    return res.send(401, 'Unauthorized');
  });

  // Auth
  app.post('/login',
    passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login' })
  );

  app.get('/login', function(req, res, next){
    var body = 'Hello World';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
  })

  app.post('/signup', function(req, res, next) {
    var body = 'Hello World';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
    // Implement signup
  });

  app.get('/api/news', function(req, res, next) {
    // Implement news api
  });

  app.get('/api/rate', function(req, res, next) {
    // Implement news rating
  });
}