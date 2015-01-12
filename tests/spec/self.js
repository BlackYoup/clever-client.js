var Bacon = require('baconjs');

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
  });
};
