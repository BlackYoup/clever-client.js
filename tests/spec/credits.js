var Bacon = require('baconjs');

module.exports = function(client){
  var userId = "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb";
  var orgaId = "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d";

  describe("Credits", function(){
    it("should be able to retrieve user credits", function(done){
      var req = client.self.credits.get().send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value().ownerId).toBe(userId);
        expect(event.value().count).toBe(50000);
        expect(event.value().dropPrice.currency).toBe("EUR");
        expect(event.value().dropPrice.value).toBe("0.001");
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve organisation credits", function(done){
      var req = client.organisations._.credits.get().withParams([orgaId]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value().ownerId).toBe(orgaId);
        expect(event.value().count).toBe(0);
        expect(event.value().dropPrice.currency).toBe("EUR");
        expect(event.value().dropPrice.value).toBe("0.001");
        done();

        return Bacon.noMore;
      });
    });
  });
};
