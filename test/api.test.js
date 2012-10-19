var assert    = require("./helper").assert
  , Represent = require("../");

describe("API", function(){

  describe("boundarySets", function(){
    var data;
    before(function(done){
      Represent.boundarySets("federal-electoral-districts", function(error, response){
        data = response;
        done(error);
      });
    });

    it("should respond with data", function(){
      assert(data);
    });
  });

  describe("boundaries", function(){
    var data;
    before(function(done){
      Represent.boundaries("toronto-wards", function(error, response){
        data = response;
        done(error);
      });
    });

    it("should respond with data", function(){
      assert(data);
    });
  });

  describe("boundariesLatLon", function(){
    var data;
    before(function(done){
      Represent.boundariesLatLon(45.524, -73.596, function(error, response){
        data = response;
        done(error);
      });
    });

    it("should respond with data", function(){
      assert(data);
    });
  });

  describe("postalCode", function(){
    var data;
    before(function(done){
      Represent.postalCode("L5G4L3", function(error, response){
        data = response;
        done(error);
      });
    });

    it("should respond with data", function(){
      assert(data);
    });
  });

  describe("representativesLatLon", function(){
    var data;
    before(function(done){
      Represent.representativesLatLon(45.524, -73.596, function(error, response){
        data = response;
        done(error);
      });
    });

    it("should respond with data", function(){
      assert(data);
    });
  });

});
