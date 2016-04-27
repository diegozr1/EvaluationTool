var PDFDocument = require = 'pdfkit';

module.exports = function(app, passport) {

// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
      if(!req.user){
        res.render('index.ejs');
      }else{
        res.render("home.ejs",{
          user:req.user
        });
      }
    });

    app.get("/projects", function(req,res){
      var user            = req.user;
      user.local.email    = undefined;
      user.local.password = undefined;
      user.save(function(err) {
        req.logout();
        res.redirect('/');
      });
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    // PAYBACK SECTION =========================
    app.get('/payback', isLoggedIn, function(req, res) {
        res.render('general/payback.ejs', {
            user : req.user
        });
    });


    // NET SECTION =========================
    app.get('/net', isLoggedIn, function(req, res) {
        res.render('general/net.ejs', {
            user : req.user
        });
    });

    // CHECKLIST SECTION =========================
    app.get('/checklist', isLoggedIn, function(req, res) {
        res.render('general/checklist.ejs', {
            user : req.user
        });
    });

    // PROJECT SECTION =========================
    app.get('/project', isLoggedIn, function(req, res) {
        res.render('general/project.ejs', {
            user : req.user
        });
    });

    // PROJECT SECTION =========================
    app.get('/rate', isLoggedIn, function(req, res) {
        res.render('general/rate.ejs', {
            user : req.user
        });
    });


    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    app.get('/pdf', function (req,res) {
        res.send("hola");
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));


// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.name     = undefined;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.local.projects = undefined;
        user.save(function(err) {
          req.logout();
          res.redirect('/');
        });
    });


};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
