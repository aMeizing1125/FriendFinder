//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//questions 
var questions = require('../content/questions');
var friendsList = require('../data/friends');


function apiJourneys(app) {
  app.get("/api/questions", function (req, res) {
    res.json(questions)
  })
  
  app.get('/api/friendsList', function (req, res) {
    res.json(friendsList)
  })

  app.post('/api/friendsList', function (req, res) {
    friendsList.push(req.body)
  })

}

module.exports = apiJourneys; 