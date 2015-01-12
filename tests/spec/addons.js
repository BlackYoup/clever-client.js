var Bacon = require('baconjs');

module.exports = function(client) {
  var userId = "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb";
  var userAddonId = "postgresql_postgres_23b98d9d-4529-4711-8877-aadb9273636b";

  var orgaId = "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d";
  var orgaAddonId = "postgresql_postgres_8871e40f-3ae9-4ced-a391-ae8f956512da";

  var providerId = "postgresql-addon";

  describe("addons", function() {
    it("should be able to retrieve user addons", function(done) {
      var req = client.self.addons.get().send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true);
        expect(event.value()[0].id).toBe(userAddonId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve a user addon", function(done) {
      var req = client.self.addons._.get().withParams([userAddonId]).send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true);
        expect(event.value().id).toBe(userAddonId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve organisation addons", function(done) {
      var req = client.organisations._.addons.get().withParams([orgaId]).send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true);
        expect(event.value()[0].id).toBe(orgaAddonId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve an organisation addon", function(done) {
      var req = client.organisations._.addons._.get().withParams([orgaId, orgaAddonId]).send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true);
        expect(event.value().id).toBe(orgaAddonId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve tags of a user addon", function(done){
      var req = client.self.addons._.tags.get().withParams([userAddonId]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value()[0]).toBe("ground-up");
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve tags of a organisation addon", function(done){
      var req = client.organisations._.addons._.tags.get().withParams([orgaId, orgaAddonId]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value()[0]).toBe("ground-up");
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve organisation providers", function(done){
      var req = client.organisations._.get().withParams([orgaId]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value().providers[0].id).toBe(providerId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve providers", function(done){
      var req = client.addons.providers.get().send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value()[providerId].id).toBe(providerId);
        done();

        return Bacon.noMore;
      });
    });
  });
};
