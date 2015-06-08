var assert    = require("assert")
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

  describe("representativeSets", function(){
    var data;
    before(function(done){
      Represent.representativeSets("ontario-legislature", function(error, response){
        data = response;
        done(error);
      });
    });

    it("should respond with data", function(){
      assert(data);
    });
  });

  describe("representatives", function(){
    var data;
    before(function(done){
      Represent.representatives("house-of-commons", function(error, response){
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

  describe("elections", function(){
    var data;
    before(function(done){
      Represent.elections("house-of-commons", function(error, response){
        data = response;
        done(error);
      });
    });

    it("should respond with data", function(){
      assert(data);
    });
  });

  describe("candidates", function(){
    var data;
    before(function(done){
      Represent.candidates("house-of-commons", function(error, response){
        data = response;
        done(error);
      });
    });

    it("should respond with data", function(){
      assert(data);
    });
  });

  describe("candidatesLatLon", function(){
    var data;
    before(function(done){
      Represent.candidatesLatLon(45.524, -73.596, function(error, response){
        data = response;
        done(error);
      });
    });

    it("should respond with data", function(){
      assert(data);
    });
  });

});
