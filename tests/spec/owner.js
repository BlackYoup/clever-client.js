var Bacon = require('baconjs');

module.exports = function(client) {
  var userId = "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb";
  var orgaId = "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d";

  describe("owner", function() {
    it("should be able to retrieve user information", function(done) {
      var req = client.owner().get().send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true);
        expect(event.value().id).toBe(userId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve user information with a given ownerId", function(done) {
      var req = client.owner(userId).get().send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true);
        expect(event.value().id).toBe(userId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve an organisation with a given ownerId", function(done) {
      var req = client.owner(orgaId).get().withParams([orgaId]).send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true);
        expect(event.value().id).toBe(orgaId);
        done();

        return Bacon.noMore;
      });
    });
  });
};
