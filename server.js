// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

 
app.use(express.static('public'));


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get("/api/whoami",function(req,res){
 let ip = req.ip
 let user =   req.get("user-agent").split(/\(|\)/)[1] 
 let langage = req.get("accept-language").split(",")[0]
 console.log(req.headers)
 
 res.send(JSON.stringify({langage:langage, ipadress: ip ,software  : user}))
  
})


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
