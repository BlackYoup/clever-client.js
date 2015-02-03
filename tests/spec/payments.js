var Bacon = require('baconjs');
var _ = require('lodash');

module.exports = function(client){
  describe("Payments", function(){
    it("should get all payments providers", function(done){
      var req = client.payments.providers.get().send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value().length).toBe(2);
        expect(event.value()[0]).toBe("Bitcoin");
        done();

        return Bacon.noMore;
      });
    });

    it("should retrieve a coupon", function(done){
      var couponName = "snarky-puppy";
      var req = client.payments.coupons._.get().withParams([couponName]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value().value).toBe(500);
        done();

        return Bacon.noMore;
      });
    });
  });
};
