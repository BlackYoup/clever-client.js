module.exports = function(client){
  var orgaId = "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d";
  var providerId = "postgresql-addon";

  describe("Provider", function(){
    it("should be able to retrieve organisation providers", function(done){
      var req = client.organisations._.get().withParams([orgaId]).send();

      req.onValue(function(orga){
        expect(orga.providers[0].id).toBe(providerId);
        done();
      });

      req.onError(function(error){
        console.error(JSON.stringify(error));
      });
    });
  });
};
