module.exports = function(app, passport) {
  //======================================
  // HOME PAGE (with login links)=========
  //======================================
  app.get('/', function(req, res) {
    res.render('index.ejs'); //load the index.ejs file
  });

  //======================================================
  // LOGIN ===============================================
  // show the login form
  app.get('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('login.ejs', {message:req.flash('loginMessage')});
  });

  //process the login form
  //app.post('/login', do all our passport stuff here);

  //=============================================================
  // SIGNUP ======================================================
  //===============================================================
  // Show the singup form
  app.get('/signup', function(req, res) {
    //render the page and pass in any flash data if it exists
    res.render('signup.ejs', {message:req.flash('signupMessage')});
  });










  })















}
