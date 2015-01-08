var Bacon = require('baconjs');

module.exports = function(client){
  var orgaId = "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d";
  var orgaAppId = "app_1918413f-6790-420b-9c91-7af6341e2a37";
  var userAppId = "app_da86bf81-bff2-4eaa-9f70-9adc660e1e4a";

  describe("Consumptions", function(){
    it("should get consumptions for the user", function(done){
      var req = client.self.consumptions.get().send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value()[userAppId]["2015-01-07T00:00:00.000Z"]).toBe(40);
        done();

        return Bacon.noMore;
      });
    });

    it("should get consumptions for the given organisation", function(done){
      var req = client.organisations._.consumptions.get().withParams([orgaId]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value()[orgaAppId]["2014-05-18T00:00:00.000Z"]).toBe(0);
        done();

        return Bacon.noMore;
      });
    });

    it("should get consumptions for a specific user application", function(done){
      var req = client.self.consumptions.get().withQuery({appId: userAppId}).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value()["2015-01-07T00:00:00.000Z"]).toBe(40);
        done();

        return Bacon.noMore;
      });
    });

    it("should get consumptions for a specific organisation application", function(done){
      var req = client.organisations._.consumptions.get().withParams([orgaId]).withQuery({appId: orgaAppId}).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value()["2014-05-18T00:00:00.000Z"]).toBe(0);
        done();

        return Bacon.noMore;
      });
    });
  });
};
