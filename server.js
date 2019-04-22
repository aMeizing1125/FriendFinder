var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; //note: node applications are PORT 3000

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});