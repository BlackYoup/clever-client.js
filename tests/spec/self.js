var Bacon = require('baconjs');
var _ = require("lodash");

module.exports = function(client) {
  var userId = "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb";

  describe("self", function() {
    it("should be able to retrieve user information", function(done) {
      var req = client.self.get().send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value().id).toBe(userId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve user emails", function(done){
      var req = client.self.emails.get().send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value()[0]).toBe("michel.league@snarky-puppy.com");
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to get reset_password form", function(done){
      var req = client.password_forgotten.get().send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value()).toBe("<form>password_forgotten</form>");
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to get a 404 for a user recurring payment", function(done){
      var req = client.self.payments.recurring.get().send();

      req.subscribe(function(event){
        expect(event.isError()).toBe(true);
        expect(event.error.id).toBe(9029);
        done();

        return Bacon.noMore;
      });
    });

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
  });
};
