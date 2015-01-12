var Bacon = require('baconjs');

module.exports = function(client) {
  var userId = "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb";
  var orgaId = "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d";

  describe("organisations", function() {
    it("should be able to retrieve user organisations", function(done) {
      var req = client.organisations.get().withQuery({user: userId}).send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true);
        expect(event.value()[0].id).toBe(orgaId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve a specific organisation", function(done) {
      var req = client.organisations._.get().withParams([orgaId]).send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true);
        expect(event.value().id).toBe(orgaId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve organisation members", function(done){
      var req = client.organisations._.members.get().withParams([orgaId]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value()[0].member.id).toBe(userId);
        done();

        return Bacon.noMore;
      });
    });

    it("should validate the VAT number", function(done){
      var VAT = "88 888 888 888";
      var country = "FR";
      var req = client.vat_check.get().withQuery({
        country: country,
        vat: VAT.replace(/\s*/g, '')
      }).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value().valid).toBe(true);
        done();

        return Bacon.noMore;
      });
    });

    it("should reject the VAT number", function(done){
      var VAT = "88";
      var country = "FRANCE";
      var req = client.vat_check.get().withQuery({
        country: country,
        vat: VAT
      }).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value().valid).toBe(false);
        done();

        return Bacon.noMore;
      });
    });
  });
};
