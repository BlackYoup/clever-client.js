var Bacon = require('baconjs');
var _ = require('lodash');

module.exports = function(client){

  describe('Billings - Invoices', function(){
    var userId = "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb";
    var orgaId = "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d";

    it("should be able to get my invoices", function(done){
      var invoiceId = "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb1419416454687";
      var req = client.self.payments.billings.get().send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(_.size(event.value())).toBe(2);
        expect(event.value()[invoiceId].status).toBe("PAID");
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to get a specific invoice", function(done){
      var invoiceId = "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb1418056876389";
      var req = client.self.payments.billings._.get().withParams([invoiceId]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value().status).toBe("PENDING");
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to get organisation invoices", function(done){
      var invoiceId = "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d1418056791269";
      var req = client.organisations._.payments.billings.get().withParams([orgaId]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(_.size(event.value())).toBe(2);
        expect(event.value()[invoiceId].status).toBe("PAID");
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to get a specific organisation invoice", function(done){
      var invoiceId = "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d1418054716851";
      var req = client.organisations._.payments.billings._.get().withParams([orgaId, invoiceId]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value().status).toBe("PENDING");
        done();

        return Bacon.noMore;
      });
    });
  });
};
