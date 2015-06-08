var request = require('request');

const BASE_URL = 'https://represent.opennorth.ca';

var Represent = {
    get: function(url, callback){
      request(BASE_URL + url , function (error, response, body) {
        if (error)
          return callback(error);
        if (response.statusCode !== 200)
          return callback(new Error("GET " + url + ": " + response.statusCode + " status"));
        try {
          callback(null, JSON.parse(body));
        } catch (error){
          callback(new Error("GET " + url + ": Error parsing response"));
        }
      });
    }

  , boundarySets: function(boundarySet, callback){
      Represent.get("/boundary-sets/" + boundarySet, callback);
    }

  , boundaries: function(boundary, callback){
      Represent.get("/boundaries/" + boundary, callback);
    }

  , boundariesLatLon: function(lat, lon, callback){
      Represent.get("/boundaries/?contains=" + lat + "," + lon, callback);
    }

  , postalCode: function(code, callback){
      Represent.get("/postcodes/" + code, callback);
    }

  , representativeSets: function(representativeSet, callback){
      Represent.get("/representative-sets/" + representativeSet, callback);
    }

  , representatives: function(representative, callback){
      Represent.get("/representatives/" + representative, callback);
    }

  , representativesLatLon: function(lat, lon, callback){
      Represent.get("/representatives/?point=" + lat + "," + lon, callback);
    }

  , elections: function(election, callback){
      Represent.get("/elections/" + election, callback);
    }

  , candidates: function(candidates, callback){
      Represent.get("/candidates/" + candidates, callback);
    }

  , candidatesLatLon: function(lat, lon, callback){
      Represent.get("/candidates/?point=" + lat + "," + lon, callback);
    }
};

module.exports = Represent;
