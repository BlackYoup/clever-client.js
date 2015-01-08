var Bacon = require('baconjs');

module.exports = function(client){
  var orgaId = "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d";
  var providerId = "postgresql-addon";

  describe("Provider", function(){
    it("should be able to retrieve organisation providers", function(done){
      var req = client.organisations._.get().withParams([orgaId]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value().providers[0].id).toBe(providerId);
        done();

        return Bacon.noMore;
      });
    });
  });
};
