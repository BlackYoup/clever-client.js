var tokens = {
  consumer_oauth_token: "aaaa",
  consumer_oauth_token_secret: "bbbb",
  user_oauth_token: "ffff",
  user_oauth_token_secret: "gggg"
};

var anonymousClient = require("../dist/clever-client.js")({
  API_CONSUMER_KEY: tokens.consumer_oauth_token,
  API_CONSUMER_SECRET: tokens.consumer_oauth_token_secret,
  API_HOST: "http://127.0.0.1:1234"
});

var client = require("../dist/clever-client.js")({
  API_HOST: "http://127.0.0.1:1234",
  API_AUTHORIZATION: anonymousClient.session.getAuthorization(tokens)
});

var displayError = function(error){
  console.error(JSON.stringify(error));
};

require("./spec/owner.js")(client, displayError);
require("./spec/self.js")(client, displayError);
require("./spec/organisations.js")(client, displayError);
require("./spec/applications.js")(client, displayError);
require("./spec/addons.js")(client, displayError);
require("./spec/providers.js")(client, displayError);
require("./spec/consumptions.js")(client, displayError);

module.exports = {};
