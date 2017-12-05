var express = require('express');
var request = require('request')
var xml2js = require('xml2js')

var postalCode = "94103"
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/school', function (req, response) {
  // postalCode = req.param
var queryURL2 = "https://api.greatschools.org/schools/nearby?key=6e010c5687631eeb16169e625fbf9915&state=CA&zip=" + postalCode + "&limit=2"

	request(queryURL2,function(apiError, apiResponse){
		if (apiError) {
			throw new Error(apiError);
		}
		var unparsedXML = apiResponse.body;
		var parseString = require('xml2js').parseString;
		parseString(unparsedXML, function(parseError, parsedXML) {
			if (parseError) {
				throw new Error(parseError);
			}
    	console.log(parsedXML.schools.school);
		})
	});
})


// var server = app.listen(4000, function () {

//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);

// });
