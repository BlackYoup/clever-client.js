function CleverAPI(settings) {
  settings = _.extend({
    API_HOST: "https://api.clever-cloud.com/v2"
  }, settings);

  var headers = !settings.API_AUTHORIZATION ? {} : {
    "Authorization": settings.API_AUTHORIZATION,
    "Content-Type": "application/json"
  };

  var cleverAPI = {};

  var client = cleverAPI.client = WadlClient.buildClient(methods, {
    host: settings.API_HOST,
    headers: headers,
    parseJSON: true,
    parseXML: true
  });

  cleverAPI.session = initializeSession(client, settings);
  cleverAPI.user = initializeUser(client, settings);
  cleverAPI.organisation = initializeOrganisation(client, settings);
  cleverAPI.application = initializeApplication(client, settings);
  cleverAPI.products = initializeProducts(client, settings);
  cleverAPI.addon = initializeAddon(client, settings);
  cleverAPI.addonprovider = initializeAddonProvider(client, settings);
  cleverAPI.invoice = initializeInvoice(client, settings);
  cleverAPI.news = initializeNews(client, settings);
  cleverAPI.statistics = initializeStatistics(client, settings);

  return cleverAPI;
}
