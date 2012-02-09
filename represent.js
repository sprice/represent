var request = require('request');

var representBaseUrl = 'http://represent.opennorth.ca';

module.exports.get = function(url, callback) {
  request(representBaseUrl + url , function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
      return;
    }
    callback(null);
  });
}

module.exports.boundarySet = function(boundary, callback) {
  request(representBaseUrl + '/boundary-sets/' + boundary + '/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
      return;
    }
    callback(null);
  });
}

module.exports.boundary = function(boundary, callback) {
  request(representBaseUrl + '/boundaries/' + boundary + '/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
      return;
    }
    callback(null);
  });
}

module.exports.boundaryLatLon = function(lat, lon, callback) {
  request(representBaseUrl + '/boundaries/?contains=' + lat + ',' + lon + '/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
      return;
    }
    callback(null);
  });
}

module.exports.postCode = function(postCode, callback) {
  request(representBaseUrl + '/postcodes/' + postCode + '/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
      return;
    }
    callback(null);
  });
}
