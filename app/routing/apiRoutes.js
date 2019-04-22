//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//questions 
var questions = require('../content/questions');
// console.log(questions); // it works. 



function apiJourneys(app){
  app.get("/api/questions", function (req, res) {
    res.json(questions);
  });
  
}

module.exports = apiJourneys; 