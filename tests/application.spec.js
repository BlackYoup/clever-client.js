if(typeof CleverAPI == "undefined") {
  CleverAPI = require("../clever-client.js");
}

if(typeof logDump == "undefined") {
  logDump = require("./log-dump.js");
}

var api = CleverAPI({
  API_AUTHORIZATION: 'OAuth realm="http://ccapi.cleverapps.io/v2/oauth", oauth_consumer_key="X2tBhWFUc9GQKUujBTd11SHYPEqwF5", oauth_token="0e052c7539724f249ad7204adc085857", oauth_signature_method="PLAINTEXT", oauth_signature="3qBrT7K1DKzll7MnRHLDiAxMEqhwqu&88b19258e86b42809eaafaf9b1d2ee46", oauth_timestamp="1398409072", oauth_nonce="830970"',
  API_HOST: "http://127.0.0.1:8080/v2"
});

describe("Application.get", function() {
  it("should be able to get application information", function(done) {
    var result = api.application.get("app_be09992d-992a-4571-a3d0-62a11becb899");

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

describe("Application.edit", function() {
  it("should be able to edit application information", function(done) {
    var result = api.application.edit({
      id: "app_be09992d-992a-4571-a3d0-62a11becb899",
      name: "test",
      description: "Application for client tests"
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

describe("Application - create and remove", function() {
  it("should be able to create and remove an application", function(done) {
    var data = {
      "name":"test2",
      "description":"test2",
      "instanceType":"sbt",
      "instanceVersion":1,
      "deploy":"git",
      "minInstances":1,
      "maxInstances":4,
      "minFlavor":"S",
      "maxFlavor":"S"
    };

    var result = api.application.create(data).chain(function(app) {
      return api.application.remove(app.id);
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

describe("Application.getVhosts", function() {
  it("should be able to get application domain names", function(done) {
    var result = api.application.getVhosts("app_be09992d-992a-4571-a3d0-62a11becb899");

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

describe("Application domain names - create and remove", function() {
  it("should be able to create and remove application domain names", function(done) {
    var result = api.application.addVhost("test.cleverapps.io", "app_be09992d-992a-4571-a3d0-62a11becb899").chain(function() {
      return api.application.removeVhost({fqdn: "test.cleverapps.io"}, "app_be09992d-992a-4571-a3d0-62a11becb899");
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

describe("Application.getInstances", function() {
  it("should be able to get application instances", function(done) {
    var result = api.application.getInstances("app_be09992d-992a-4571-a3d0-62a11becb899");

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

describe("Application.redeploy", function() {
  it("should be able to (re)deploy an application", function(done) {
    var result = api.application.redeploy("app_be09992d-992a-4571-a3d0-62a11becb899");

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

describe("Application.undeploy", function() {
  it("should be able to undeploy an application", function(done) {
    var result = api.application.undeploy("app_be09992d-992a-4571-a3d0-62a11becb899");

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

describe("Application.getLogs", function() {
  it("should be able to get application logs", function(done) {
    console.log("TODO: Test API can't forward application logs atm");
    done();
  });

  it("should be able to get application logs since yesterday", function(done) {
    console.log("TODO: Test API can't forward application logs atm");
    done();
  });
});

describe("Application.getInstanceIdsFromLogs", function() {
  it("should be able to extract instance ids from logs", function() {
    var result = api.application.getInstanceIdsFromLogs(logDump.hits.hits);
    var expectedResult = [
      "57d4d176-3e50-4c2f-8a2b-ddd581e991d9",
      "59b00b48-14c1-4183-842a-5a5c2d074d2e",
      "7c19f3bd-bba5-40b2-9593-f69768b354c4",
      "9f969862-57a8-4c54-b613-4279fda132fe",
      "e6ccd367-8a50-4659-8983-d88d5bcf492e"
    ];

    expect(_.difference(result, expectedResult).length).toBe(0);
  });
});

describe("Application.getAddons", function() {
  it("should be able to addons linked to the given application", function(done) {
    var result = api.application.getAddons("app_be09992d-992a-4571-a3d0-62a11becb899");

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

describe("Application.linkAddon", function() {
  it("should be able to link an addon to the given application", function(done) {
    console.log("TODO: addon aren't stable on the test API atm");
    done();
  });
});

describe("Application.getEnvVariables", function() {
  it("should be able to get the environment variables of a given application", function(done) {
    var result = api.application.getEnvVariables("app_be09992d-992a-4571-a3d0-62a11becb899");

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

describe("Application environment variables - create and remove", function() {
  it("should be able to addons linked to the given application", function(done) {
    var result = api.application.setEnvVariable("ENV_KEY", "ENV_VALUE", "app_be09992d-992a-4571-a3d0-62a11becb899").chain(function() {
      return api.application.removeEnvVariable("ENV_KEY", "app_be09992d-992a-4571-a3d0-62a11becb899");
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
