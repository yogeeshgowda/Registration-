var express = require('express');
  var app     = express();
  var path = require('path');
  
  // set the public folder to serve public assets
  app.use(express.static(__dirname + '/'));
  
  // set up our one route to the index.html file
 app.get('*', function(req, res) {
     res.sendFile(path.join(__dirname + '/public/views/index.html'));
 });
 app.listen(8050);
 console.log('port is running 8050');
