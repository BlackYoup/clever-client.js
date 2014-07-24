if(typeof Promise == "undefined") {
  Promise = require("pacta");
}

describe("User.get", function() {
  it("should be able to get user information", function(done) {
    var result = api.user.get();

    var oncomplete = function() {
      expect(result.resolved).toBe(true);
      done();
    };

    result.then(oncomplete, function(error) {
      console.log(JSON.stringify(error));
      oncomplete();
    });
  });
});

describe("User.update", function() {
  it("should be able to update user information", function(done) {
    var data = {
      firstName: "Dave",
      lastName: "Test",
      phone: "0102030405",
      address: "Somewhere",
      city: "Somewhere",
      zipcode: "Somewhere",
      country: "FRANCE"
    };

    var result = api.user.update(data);

    var oncomplete = function() {
      expect(result.resolved).toBe(true);
      done();
    };

    result.then(oncomplete, function(error) {
      console.log(JSON.stringify(error));
      oncomplete();
    });
  });
});

describe("User.changePassword", function() {
  it("should be able to update user password", function(done) {
    var result = api.user.changePassword("devs+tests", "devs+tests");

    var oncomplete = function() {
      expect(result.resolved).toBe(true);
      done();
    };

    result.then(oncomplete, function(error) {
      console.log(JSON.stringify(error));
      oncomplete();
    });
  });
});

describe("User - email addresses", function() {
  it("should be able to get user email addresses", function(done) {
    var result = api.user.getEmailAddresses();

    var oncomplete = function() {
      expect(result.resolved).toBe(true);
      done();
    };

    result.then(oncomplete, function(error) {
      console.log(JSON.stringify(error));
      oncomplete();
    });
  });

  it("should be able to add an email address", function(done) {
    var result = api.user.addEmailAddress("devs+tests+secondary@clever-cloud.com");

    var oncomplete = function() {
      expect(result.resolved).toBe(true);
      done();
    };

    result.then(oncomplete, function(error) {
      console.log(JSON.stringify(error));
      oncomplete();
    });
  });

  it("should be able to remove an email address", function(done) {
    var result = api.user.removeEmailAddress("devs+tests+secondary@clever-cloud.com").chainError(function(error) {
      var p = new Promise();

      /* TODO: error id might change */
      if(error.id == 1001) {
        console.log("Warning: the email address does not seem to exist.");
        p.resolve();
      }
      else {
        p.reject(error);
      }

      return p;
    });

    var oncomplete = function() {
      expect(result.resolved).toBe(true);
      done();
    };

    result.then(oncomplete, function(error) {
      console.log(JSON.stringify(error));
      oncomplete();
    });
  });
});

describe("User - SSH keys", function() {
  it("should be able to get user SSH keys", function(done) {
    var result = api.user.getSSHKeys();

    var oncomplete = function() {
      expect(result.resolved).toBe(true);
      done();
    };

    result.then(oncomplete, function(error) {
      console.log(JSON.stringify(error));
      oncomplete();
    });
  });

  it("should be able to add an SSH key", function(done) {
    var result = api.user.addSSHKey("key", "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCs1LRp/RfUwm91I908CqwgSJv1opTqn/32IfAW+k9ghFOKJh7tjMDEnM69yAmQu0JGaeluZSnUNonsFZ1Ev7/6cLc3fiqxuUMyMW3xZkRQ4Djr8u1/e13Wr3zo7BH05C9cC9+2JrAmSPJRVomEjDjy4YyzDn7zl2puXhBK/viByE8jZ4QvxgnwCW/gIp2vyR9zIbDHb9OH9XDPHp7aw/d54BlLiCOhjvTOA0o8hLLdi4WTHRkFDZ7JrQq485QL3Mbga1r5d+DHMxMZ87upMhe8NOsOEHVSQ+FoK3ET4tLMotStBpkfTX9aHFIzp67cGG7TovDqb+x4qJZ1OZYuqo8F rbelouin@mufasa.local");

    var oncomplete = function() {
      expect(result.resolved).toBe(true);
      done();
    };

    result.then(oncomplete, function(error) {
      console.log(JSON.stringify(error));
      oncomplete();
    });
  });

  it("should be able to remove an SSH key", function(done) {
    var result = api.user.removeSSHKey("key");

    var oncomplete = function() {
      expect(result.resolved).toBe(true);
      done();
    };

    result.then(oncomplete, function(error) {
      console.log(JSON.stringify(error));
      oncomplete();
    });
  });
});

describe("User.getCreditCards", function() {
  it("should be able to get user credit cards", function(done) {
    var result = api.user.getCreditCards();

    var oncomplete = function() {
      expect(result.resolved).toBe(true);
      done();
    };

    result.then(oncomplete, function(error) {
      console.log(JSON.stringify(error));
      oncomplete();
    });
  });
});

describe("User.getTokens", function() {
  it("should be able to get user connection tokens", function(done) {
    var result = api.user.getTokens();

    var oncomplete = function() {
      expect(result.resolved).toBe(true);
      done();
    };

    result.then(oncomplete, function(error) {
      console.log(JSON.stringify(error));
      oncomplete();
    });
  });
});

describe("User.removeToken", function() {
  it("should be able to remove user connection tokens", function(done) {
    console.log("TODO: no test token is available atm");
    done();
  });
});
