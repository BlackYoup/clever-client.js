var Bacon = require('baconjs');

module.exports = function(client) {
  var userId = "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb";
  var userAppId = "app_da86bf81-bff2-4eaa-9f70-9adc660e1e4a";

  var orgaId = "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d";
  var orgaAppId = "app_1918413f-6790-420b-9c91-7af6341e2a37";

  describe("applications", function() {
    it("should be able to retrieve user applications", function(done) {
      var req = client.self.applications.get().send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true)
        expect(event.value()[0].id).toBe(userAppId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve a user application", function(done) {
      var req = client.self.applications._.get().withParams([userAppId]).send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true);
        expect(event.value().id).toBe(userAppId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve vhosts of a user application", function(done){
      var req = client.self.applications._.vhosts.get().withParams([userAppId]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value()[0].fqdn).toBe("thing-of-gold.cleverapps.io");
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve organisation applications", function(done) {
      var req = client.organisations._.applications.get().withParams([orgaId]).send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true);
        expect(event.value()[0].id).toBe(orgaAppId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve an organisation application", function(done) {
      var req = client.organisations._.applications._.get().withParams([orgaId, orgaAppId]).send();

      req.subscribe(function(event) {
        expect(event.hasValue()).toBe(true);
        expect(event.value().id).toBe(orgaAppId);
        done();

        return Bacon.noMore;
      });
    });

    it("should be able to retrieve vhosts of an application of organisation", function(done){
      var req = client.organisations._.applications._.vhosts.get().withParams([orgaId, orgaAppId]).send();

      req.subscribe(function(event){
        expect(event.hasValue()).toBe(true);
        expect(event.value()[0].fqdn).toBe("minjor.cleverapps.io");
        done();

        return Bacon.noMore;
      });
    });
  });
};
