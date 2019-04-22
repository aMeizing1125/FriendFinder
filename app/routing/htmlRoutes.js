// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// var tableData = require("../data/tableData");
// var waitListData = require("../data/waitinglistData");
var path = require('path');


//Option 1 like activities taught in class.  
// module.exports = function (app) { //app can be named anything and is just running express. 

  // app.get('/', function (req, res) {
  //   // res.send('Hello World');
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });

  // // app.get("/survey", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/survey.html"));
  // });

  // app.get("/api/friends", function (req, res) {
  //   res.sendFile(path.join(__dirname, "all.html"));
  // });

// }

// Option2 breaking it apart.. compartmentatlizing. 

function journeys(app) {
  app.get('/', function (req, res) {
    // res.send('Hello World');
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // app.get("/api/friends", function (req, res) {
  //   res.sendFile(path.join(__dirname, "all.html"));
  // });
}

module.exports = journeys; 
