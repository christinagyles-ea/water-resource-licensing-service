var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
//module.exports = function(router){

  // Routes for Tutorial 3
  //
  // Ineligible users are routed to 'ineligible.html'

  router.get('/juggling-licence/question-page-2', function (req, res) {

    var eligible = req.query.eligible;

    if (eligible >= 2){

      res.render('juggling-licence/question-page-2');

    } else {

      res.redirect('/juggling-licence/ineligible');

    }

  });

router.get('/juggling-licence/check-your-answers-page', function (req, res) {

  var jugglingFeat = req.query.jugglingFeat

  res.render('juggling-licence/check-your-answers-page', {jugglingFeat})
});

//}


module.exports = router
