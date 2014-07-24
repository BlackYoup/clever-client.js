var methods = {
  "//invoice/external/{bid}": [{
    "verb": "POST",
    "name": "updateInvoice",
    "params": [{
      "name": "bid",
      "style": "template"
    }]
  }],
  "//payments/webhooks/paymill": [{
    "verb": "POST",
    "name": "subscriptionEvent",
    "params": []
  }],
  "/addons/providers": [{
    "verb": "GET",
    "name": "getAddonProviders",
    "params": []
  }],
  "/admin/owners/{id}/applications/{appId}": [{
    "verb": "DELETE",
    "name": "deleteApplicationForOwner",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }]
  }],
  "/cleverapps/{name}": [{
    "verb": "GET",
    "name": "checkDomainAvailability",
    "params": [{
      "name": "name",
      "style": "template"
    }]
  }],
  "/coldstart": [{
    "verb": "GET",
    "name": "coldStart",
    "params": []
  }],
  "/github": [{
    "verb": "GET",
    "name": "startGithub",
    "params": []
  }],
  "/github/applications": [{
    "verb": "GET",
    "name": "getGithubApplications",
    "params": [{
      "name": "redirectUrl",
      "style": "query"
    }]
  }],
  "/github/callback": [{
    "verb": "GET",
    "name": "githubCallback",
    "params": [{
      "name": "Cookie",
      "style": "header"
    }, {
      "name": "code",
      "style": "query"
    }, {
      "name": "state",
      "style": "query"
    }, {
      "name": "error",
      "style": "query"
    }, {
      "name": "error_description",
      "style": "query"
    }, {
      "name": "error_uri",
      "style": "query"
    }]
  }],
  "/github/keys": [{
    "verb": "GET",
    "name": "getGithubKeys",
    "params": [{
      "name": "redirectUrl",
      "style": "query"
    }]
  }],
  "/github/link": [{
    "verb": "GET",
    "name": "linkGithub",
    "params": [{
      "name": "transactionId",
      "style": "query"
    }, {
      "name": "redirectUrl",
      "style": "query"
    }]
  }],
  "/github/login": [{
    "verb": "GET",
    "name": "githubLogin",
    "params": [{
      "name": "redirectUrl",
      "style": "query"
    }]
  }],
  "/github/signup": [{
    "verb": "GET",
    "name": "githubSignup",
    "params": []
  }, {
    "verb": "POST",
    "name": "finsihGithubSignup",
    "params": [{
      "name": "transactionId",
      "style": "query"
    }, {
      "name": "firstName",
      "style": "query"
    }, {
      "name": "lastName",
      "style": "query"
    }, {
      "name": "terms",
      "style": "query"
    }]
  }],
  "/internal/activeMails": [{
    "verb": "GET",
    "name": "getActiveMails",
    "params": []
  }],
  "/internal/applications": [{
    "verb": "GET",
    "name": "getApplications",
    "params": []
  }],
  "/internal/applications/{appId}": [{
    "verb": "DELETE",
    "name": "deleteApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }, {
    "verb": "GET",
    "name": "getApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }],
  "/internal/applications/{appId}/downscale": [{
    "verb": "POST",
    "name": "downscaleApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }],
  "/internal/applications/{appId}/forceRedeploy": [{
    "verb": "POST",
    "name": "forceRedeployApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "down",
      "style": "query"
    }, {
      "name": "commit",
      "style": "query"
    }]
  }],
  "/internal/applications/{appId}/instances": [{
    "verb": "POST",
    "name": "changeApplicationInstances",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }],
  "/internal/applications/{appId}/instances/{instanceId}": [{
    "verb": "PUT",
    "name": "replaceApplicationInstance",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "instanceId",
      "style": "template"
    }]
  }],
  "/internal/applications/{appId}/ownerId": [{
    "verb": "GET",
    "name": "getApplicationOwnerId",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }],
  "/internal/applications/{appId}/redeploy": [{
    "verb": "POST",
    "name": "redeployApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "down",
      "style": "query"
    }, {
      "name": "commit",
      "style": "query"
    }, {
      "name": "cause",
      "style": "query"
    }]
  }],
  "/internal/applications/{appId}/undeploy": [{
    "verb": "POST",
    "name": "undeployApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }],
  "/internal/applications/{appId}/upscale": [{
    "verb": "POST",
    "name": "upscaleApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }],
  "/internal/applications/{appId}/vhosts/{domain}": [{
    "verb": "DELETE",
    "name": "removeDomain",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "domain",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "addDomain",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "domain",
      "style": "template"
    }]
  }],
  "/internal/coupons": [{
    "verb": "POST",
    "name": "createCoupon",
    "params": []
  }],
  "/internal/coupons/{name}": [{
    "verb": "GET",
    "name": "getCoupon",
    "params": [{
      "name": "name",
      "style": "template"
    }]
  }],
  "/internal/dropcounts": [{
    "verb": "GET",
    "name": "getAllDropCount",
    "params": []
  }],
  "/internal/dropcounts/{ownerId}": [{
    "verb": "GET",
    "name": "getDropAccount",
    "params": [{
      "name": "ownerId",
      "style": "template"
    }]
  }, {
    "verb": "POST",
    "name": "addDrops",
    "params": [{
      "name": "ownerId",
      "style": "template"
    }]
  }],
  "/internal/heroku/{ownerId}/providers": [{
    "verb": "POST",
    "name": "uploadManifest",
    "params": [{
      "name": "ownerId",
      "style": "template"
    }]
  }],
  "/internal/instances": [{
    "verb": "GET",
    "name": "getInstances",
    "params": []
  }],
  "/internal/instances/dec": [{
    "verb": "POST",
    "name": "dec",
    "params": [{
      "name": "type",
      "style": "query"
    }, {
      "name": "version",
      "style": "query"
    }]
  }],
  "/internal/instances/inc": [{
    "verb": "POST",
    "name": "inc",
    "params": [{
      "name": "type",
      "style": "query"
    }, {
      "name": "version",
      "style": "query"
    }]
  }],
  "/internal/instances/{type}-{version}": [{
    "verb": "GET",
    "name": "getInstance",
    "params": [{
      "name": "type",
      "style": "template"
    }, {
      "name": "version",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "createInstance",
    "params": [{
      "name": "type",
      "style": "template"
    }, {
      "name": "version",
      "style": "template"
    }]
  }],
  "/internal/invoices": [{
    "verb": "GET",
    "name": "getInvoices",
    "params": [{
      "name": "owner",
      "style": "query"
    }]
  }, {
    "verb": "POST",
    "name": "createPendingInvoice",
    "params": []
  }],
  "/internal/invoices/links": [{
    "verb": "GET",
    "name": "getLinks",
    "params": [{
      "name": "before",
      "style": "query"
    }]
  }],
  "/internal/invoices/pdf": [{
    "verb": "GET",
    "name": "getPdfInvoices",
    "params": [{
      "name": "from",
      "style": "query"
    }]
  }],
  "/internal/invoices/{invId}": [{
    "verb": "GET",
    "name": "getHtmlInvoice",
    "params": [{
      "name": "invId",
      "style": "template"
    }]
  }],
  "/internal/invoices/{invoice}/credit": [{
    "verb": "PUT",
    "name": "generateCreditNote",
    "params": [{
      "name": "invoice",
      "style": "template"
    }]
  }],
  "/internal/oauth1consumers": [{
    "verb": "POST",
    "name": "createOAuth1Consumer",
    "params": []
  }],
  "/internal/organisations": [{
    "verb": "GET",
    "name": "getOrganisations",
    "params": []
  }],
  "/internal/owners/{ownerId}": [{
    "verb": "GET",
    "name": "getOwner",
    "params": [{
      "name": "ownerId",
      "style": "template"
    }]
  }],
  "/internal/owners/{ownerId}/applications": [{
    "verb": "GET",
    "name": "getOwnerApplications",
    "params": [{
      "name": "ownerId",
      "style": "template"
    }]
  }],
  "/internal/owners/{ownerId}/keys": [{
    "verb": "GET",
    "name": "getUserSshKeys",
    "params": [{
      "name": "ownerId",
      "style": "template"
    }]
  }],
  "/internal/packages": [{
    "verb": "GET",
    "name": "getAvailablePackages",
    "params": [{
      "name": "currency",
      "style": "query"
    }]
  }, {
    "verb": "POST",
    "name": "createPackage",
    "params": []
  }],
  "/internal/packages/{packageId}": [{
    "verb": "DELETE",
    "name": "deletePackage",
    "params": [{
      "name": "packageId",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "editPackage",
    "params": [{
      "name": "packageId",
      "style": "template"
    }]
  }],
  "/internal/pending": [{
    "verb": "GET",
    "name": "getPendingUsers",
    "params": []
  }],
  "/internal/prices/{currency}": [{
    "verb": "PUT",
    "name": "setExchangeRate",
    "params": [{
      "name": "currency",
      "style": "template"
    }]
  }],
  "/internal/users": [{
    "verb": "GET",
    "name": "getUsers",
    "params": [{
      "name": "email",
      "style": "query"
    }]
  }],
  "/internal/users/{userId}/email": [{
    "verb": "GET",
    "name": "getEmail",
    "params": [{
      "name": "userId",
      "style": "template"
    }]
  }],
  "/internal/users/{userId}/keys/{name}": [{
    "verb": "DELETE",
    "name": "deleteSshKey",
    "params": [{
      "name": "name",
      "style": "template"
    }, {
      "name": "userId",
      "style": "template"
    }]
  }],
  "/internal/users/{userId}/validate": [{
    "verb": "POST",
    "name": "validateUser",
    "params": [{
      "name": "userId",
      "style": "template"
    }]
  }],
  "/newsfeeds/blog": [{
    "verb": "GET",
    "name": "getBlogFeed",
    "params": []
  }],
  "/newsfeeds/engineering": [{
    "verb": "GET",
    "name": "getEngineeringFeed",
    "params": []
  }],
  "/oauth/access_token": [{
    "verb": "POST",
    "name": "postAccessTokenRequest",
    "params": [{
      "name": "oauth_consumer_key",
      "style": "query"
    }, {
      "name": "oauth_token",
      "style": "query"
    }, {
      "name": "oauth_signature_method",
      "style": "query"
    }, {
      "name": "oauth_signature",
      "style": "query"
    }, {
      "name": "oauth_timestamp",
      "style": "query"
    }, {
      "name": "oauth_nonce",
      "style": "query"
    }, {
      "name": "oauth_version",
      "style": "query"
    }, {
      "name": "oauth_verifier",
      "style": "query"
    }, {
      "name": "oauth_callback",
      "style": "query"
    }, {
      "name": "oauth_token_secret",
      "style": "query"
    }, {
      "name": "oauth_callback_confirmed",
      "style": "query"
    }]
  }],
  "/oauth/authorize": [{
    "verb": "GET",
    "name": "authorizeForm",
    "params": [{
      "name": "Cookie",
      "style": "header"
    }, {
      "name": "Cookie",
      "style": "header"
    }, {
      "name": "oauth_token",
      "style": "query"
    }]
  }, {
    "verb": "POST",
    "name": "authorizeToken",
    "params": [{
      "name": "Cookie",
      "style": "header"
    }, {
      "name": "Cookie",
      "style": "header"
    }, {
      "name": "almighty",
      "style": "query"
    }, {
      "name": "access_organisations",
      "style": "query"
    }, {
      "name": "manage_organisations",
      "style": "query"
    }, {
      "name": "manage_organisations_services",
      "style": "query"
    }, {
      "name": "manage_organisations_applications",
      "style": "query"
    }, {
      "name": "manage_organisations_members",
      "style": "query"
    }, {
      "name": "access_organisations_bills",
      "style": "query"
    }, {
      "name": "access_organisations_credit_count",
      "style": "query"
    }, {
      "name": "access_organisations_consumption_statistics",
      "style": "query"
    }, {
      "name": "access_personal_information",
      "style": "query"
    }, {
      "name": "manage_personal_information",
      "style": "query"
    }, {
      "name": "manage_ssh_keys",
      "style": "query"
    }, {
      "name": "manage_services",
      "style": "query"
    }, {
      "name": "manage_applications",
      "style": "query"
    }, {
      "name": "access_bills",
      "style": "query"
    }, {
      "name": "access_credit_count",
      "style": "query"
    }, {
      "name": "access_consumption_statistics",
      "style": "query"
    }, {
      "name": "report_feedback",
      "style": "query"
    }]
  }],
  "/oauth/request_token": [{
    "verb": "POST",
    "name": "postReqTokenRequest",
    "params": [{
      "name": "oauth_consumer_key",
      "style": "query"
    }, {
      "name": "oauth_token",
      "style": "query"
    }, {
      "name": "oauth_signature_method",
      "style": "query"
    }, {
      "name": "oauth_signature",
      "style": "query"
    }, {
      "name": "oauth_timestamp",
      "style": "query"
    }, {
      "name": "oauth_nonce",
      "style": "query"
    }, {
      "name": "oauth_version",
      "style": "query"
    }, {
      "name": "oauth_verifier",
      "style": "query"
    }, {
      "name": "oauth_callback",
      "style": "query"
    }, {
      "name": "oauth_token_secret",
      "style": "query"
    }, {
      "name": "oauth_callback_confirmed",
      "style": "query"
    }]
  }],
  "/organisations": [{
    "verb": "GET",
    "name": "getUserOrganisationss",
    "params": [{
      "name": "user",
      "style": "query"
    }]
  }, {
    "verb": "POST",
    "name": "createOrganisation",
    "params": []
  }],
  "/organisations/{id}": [{
    "verb": "DELETE",
    "name": "deleteOrganisation",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }, {
    "verb": "GET",
    "name": "getOrganisation",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "editOrganisation",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }],
  "/organisations/{id}/addonproviders/{providerId}": [{
    "verb": "GET",
    "name": "getProviderInfos",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "providerId",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "updateProviderInfos",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "providerId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/addonproviders/{providerId}/features": [{
    "verb": "GET",
    "name": "getProviderFeatures",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "providerId",
      "style": "template"
    }]
  }, {
    "verb": "POST",
    "name": "addProviderFeature",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "providerId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/addonproviders/{providerId}/features/{featureId}": [{
    "verb": "DELETE",
    "name": "deleteProviderFeature",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "featureId",
      "style": "template"
    }, {
      "name": "providerId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/addonproviders/{providerId}/plans": [{
    "verb": "GET",
    "name": "getProviderPlans",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "providerId",
      "style": "template"
    }]
  }, {
    "verb": "POST",
    "name": "addProviderPlan",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "providerId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/addonproviders/{providerId}/plans/{planId}": [{
    "verb": "DELETE",
    "name": "deleteProviderPlan",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "providerId",
      "style": "template"
    }, {
      "name": "planId",
      "style": "template"
    }]
  }, {
    "verb": "GET",
    "name": "getProviderPlan",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "providerId",
      "style": "template"
    }, {
      "name": "planId",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "editProviderPlan",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "providerId",
      "style": "template"
    }, {
      "name": "planId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/addonproviders/{providerId}/testers": [{
    "verb": "POST",
    "name": "addBetaTester",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "providerId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/addons": [{
    "verb": "GET",
    "name": "getAddons",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }, {
    "verb": "POST",
    "name": "provisionAddon",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }],
  "/organisations/{id}/addons/{addonId}": [{
    "verb": "DELETE",
    "name": "deprovisionAddon",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "addonId",
      "style": "template"
    }]
  }, {
    "verb": "GET",
    "name": "getAddon",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "addonId",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "changePlan",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "addonId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/addons/{addonId}/applications": [{
    "verb": "GET",
    "name": "getApplicationsLinkedToAddon",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "addonId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/addons/{addonId}/sso": [{
    "verb": "GET",
    "name": "getSSOData",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "addonId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/addons/{addonId}/tags": [{
    "verb": "GET",
    "name": "getAddonTags",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "addonId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/addons/{addonId}/tags/{tag}": [{
    "verb": "DELETE",
    "name": "deleteAddonTag",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "tag",
      "style": "template"
    }, {
      "name": "addonId",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "addAddonTag",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "tag",
      "style": "template"
    }, {
      "name": "addonId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/applications": [{
    "verb": "GET",
    "name": "getAllApplications",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }, {
    "verb": "POST",
    "name": "addApplication",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }],
  "/organisations/{id}/applications/{appId}": [{
    "verb": "DELETE",
    "name": "deleteApplication",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }]
  }, {
    "verb": "GET",
    "name": "getApplication",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "editApplication",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/applications/{appId}/addons": [{
    "verb": "GET",
    "name": "getAddonsLinkedToApplication",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }]
  }, {
    "verb": "POST",
    "name": "linkAddonToApplication",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/applications/{appId}/addons/{addonId}": [{
    "verb": "DELETE",
    "name": "unlinkAddonFromApplication",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }, {
      "name": "addonId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/applications/{appId}/env": [{
    "verb": "GET",
    "name": "getApplicationEnv",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/applications/{appId}/env/{envName}": [{
    "verb": "DELETE",
    "name": "removeApplicationEnv",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }, {
      "name": "envName",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "editApplicationEnv",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }, {
      "name": "envName",
      "style": "template"
    }]
  }],
  "/organisations/{id}/applications/{appId}/instance": [{
    "verb": "PUT",
    "name": "changeApplicationType",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }, {
      "name": "type",
      "style": "query"
    }, {
      "name": "version",
      "style": "query"
    }]
  }],
  "/organisations/{id}/applications/{appId}/instances": [{
    "verb": "DELETE",
    "name": "undeployApplication",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }]
  }, {
    "verb": "GET",
    "name": "getApplicationInstances",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }]
  }, {
    "verb": "POST",
    "name": "redeployApplication",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/applications/{appId}/logs": [{
    "verb": "GET",
    "name": "getApplicationLogss",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }, {
      "name": "order",
      "style": "query"
    }, {
      "name": "since",
      "style": "query"
    }]
  }],
  "/organisations/{id}/applications/{appId}/tags": [{
    "verb": "GET",
    "name": "getApplicationTags",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/applications/{appId}/tags/{tag}": [{
    "verb": "DELETE",
    "name": "deleteApplicationTag",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }, {
      "name": "tag",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "addApplicationTag",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }, {
      "name": "tag",
      "style": "template"
    }]
  }],
  "/organisations/{id}/applications/{appId}/vhosts": [{
    "verb": "GET",
    "name": "getVhosts",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/applications/{appId}/vhosts/{domain}": [{
    "verb": "DELETE",
    "name": "removeVhost",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }, {
      "name": "domain",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "addVhost",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "appId",
      "style": "template"
    }, {
      "name": "domain",
      "style": "template"
    }]
  }],
  "/organisations/{id}/credits": [{
    "verb": "GET",
    "name": "getAmount",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }],
  "/organisations/{id}/credits/history": [{
    "verb": "GET",
    "name": "getStats",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "type",
      "style": "query"
    }, {
      "name": "appId",
      "style": "query"
    }, {
      "name": "from",
      "style": "query"
    }, {
      "name": "to",
      "style": "query"
    }]
  }],
  "/organisations/{id}/instances": [{
    "verb": "GET",
    "name": "getInstancesForAllApps",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }],
  "/organisations/{id}/members": [{
    "verb": "POST",
    "name": "addOrganisationMember",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "invitationKey",
      "style": "query"
    }]
  }],
  "/organisations/{id}/members/{userId}": [{
    "verb": "DELETE",
    "name": "removeOrganisationMember",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "userId",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "editOrganisationMember",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "userId",
      "style": "template"
    }]
  }],
  "/organisations/{id}/payment-info": [{
    "verb": "GET",
    "name": "getPaymentInfo",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }],
  "/organisations/{id}/payments/billings": [{
    "verb": "GET",
    "name": "getInvoices",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }, {
    "verb": "POST",
    "name": "buyDrops",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }],
  "/organisations/{id}/payments/billings/{bid}": [{
    "verb": "GET",
    "name": "getInvoice",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "bid",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "choosePaymentMethod",
    "params": [{
      "name": "id",
      "style": "template"
    }, {
      "name": "bid",
      "style": "template"
    }]
  }],
  "/organisations/{id}/payments/recurring": [{
    "verb": "DELETE",
    "name": "deleteRecurrentPayment",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }, {
    "verb": "GET",
    "name": "getRecurrentPayment",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "createRecurrentPayment",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }],
  "/password_forgotten": [{
    "verb": "GET",
    "name": "getPasswordForgottenForm",
    "params": []
  }, {
    "verb": "POST",
    "name": "askForPasswordResetViaForm",
    "params": [{
      "name": "TesterPass",
      "style": "header"
    }, {
      "name": "login",
      "style": "query"
    }, {
      "name": "drop_tokens",
      "style": "query"
    }]
  }],
  "/password_forgotten/{key}": [{
    "verb": "GET",
    "name": "confirmPasswordResetRequest",
    "params": [{
      "name": "key",
      "style": "template"
    }, {
      "name": "TesterPass",
      "style": "header"
    }]
  }],
  "/payments/coupons/{name}": [{
    "verb": "GET",
    "name": "getCoupon",
    "params": [{
      "name": "name",
      "style": "template"
    }]
  }],
  "/payments/methods": [{
    "verb": "GET",
    "name": "getAvailablePaymentMethods",
    "params": []
  }],
  "/payments/publickeys/paymill": [{
    "verb": "GET",
    "name": "getPaymillPublicKey",
    "params": []
  }],
  "/payments/webhooks/paymill": [{
    "verb": "POST",
    "name": "handlePaymillWebHook",
    "params": [{
      "name": "verif",
      "style": "query"
    }]
  }],
  "/payments/{bid}/cancel/paymill": [{
    "verb": "POST",
    "name": "cancelPaymillPayment",
    "params": [{
      "name": "bid",
      "style": "template"
    }]
  }],
  "/payments/{bid}/cancel/paypal": [{
    "verb": "GET",
    "name": "cancelPaypalPayment",
    "params": [{
      "name": "bid",
      "style": "template"
    }]
  }],
  "/payments/{bid}/end/paymill": [{
    "verb": "POST",
    "name": "endPaymillPayment",
    "params": [{
      "name": "bid",
      "style": "template"
    }]
  }],
  "/payments/{bid}/end/paypal": [{
    "verb": "GET",
    "name": "endPaypalPayment",
    "params": [{
      "name": "bid",
      "style": "template"
    }, {
      "name": "token",
      "style": "query"
    }, {
      "name": "PayerID",
      "style": "query"
    }]
  }],
  "/ping": [{
    "verb": "GET",
    "name": "ping",
    "params": []
  }],
  "/ping/stats": [{
    "verb": "GET",
    "name": "stats",
    "params": []
  }],
  "/products/instances": [{
    "verb": "GET",
    "name": "getAvailableInstances",
    "params": [{
      "name": "for",
      "style": "query"
    }]
  }],
  "/products/packages": [{
    "verb": "GET",
    "name": "getAvailablePackages",
    "params": [{
      "name": "coupon",
      "style": "query"
    }, {
      "name": "orgaId",
      "style": "query"
    }, {
      "name": "currency",
      "style": "query"
    }]
  }],
  "/products/prices": [{
    "verb": "GET",
    "name": "getExcahngeRates",
    "params": []
  }],
  "/products/zones": [{
    "verb": "GET",
    "name": "getZones",
    "params": []
  }],
  "/self": [{
    "verb": "DELETE",
    "name": "deleteUser",
    "params": []
  }, {
    "verb": "GET",
    "name": "getUser",
    "params": []
  }, {
    "verb": "PUT",
    "name": "editUser",
    "params": []
  }],
  "/self/addons": [{
    "verb": "GET",
    "name": "getAddons",
    "params": []
  }, {
    "verb": "POST",
    "name": "provisionAddon",
    "params": []
  }],
  "/self/addons/{addonId}": [{
    "verb": "DELETE",
    "name": "deprovisionAddon",
    "params": [{
      "name": "addonId",
      "style": "template"
    }]
  }, {
    "verb": "GET",
    "name": "getAddon",
    "params": [{
      "name": "addonId",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "changePlan",
    "params": [{
      "name": "addonId",
      "style": "template"
    }]
  }],
  "/self/addons/{addonId}/applications": [{
    "verb": "GET",
    "name": "getApplicationsLinkedToAddon",
    "params": [{
      "name": "addonId",
      "style": "template"
    }]
  }],
  "/self/addons/{addonId}/sso": [{
    "verb": "GET",
    "name": "getSSOData",
    "params": [{
      "name": "addonId",
      "style": "template"
    }]
  }],
  "/self/addons/{addonId}/tags": [{
    "verb": "GET",
    "name": "getAddonTags",
    "params": [{
      "name": "addonId",
      "style": "template"
    }]
  }],
  "/self/addons/{addonId}/tags/{tag}": [{
    "verb": "DELETE",
    "name": "deleteAddonTag",
    "params": [{
      "name": "tag",
      "style": "template"
    }, {
      "name": "addonId",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "addAddonTag",
    "params": [{
      "name": "tag",
      "style": "template"
    }, {
      "name": "addonId",
      "style": "template"
    }]
  }],
  "/self/applications": [{
    "verb": "GET",
    "name": "getApplications",
    "params": []
  }, {
    "verb": "POST",
    "name": "addApplication",
    "params": []
  }],
  "/self/applications/{appId}": [{
    "verb": "DELETE",
    "name": "deleteApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }, {
    "verb": "GET",
    "name": "getApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "editApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }],
  "/self/applications/{appId}/addons": [{
    "verb": "GET",
    "name": "getAddonsLinkedToApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }, {
    "verb": "POST",
    "name": "linkAddonToApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }],
  "/self/applications/{appId}/addons/{addonId}": [{
    "verb": "DELETE",
    "name": "unlinkAddonFromApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "addonId",
      "style": "template"
    }]
  }],
  "/self/applications/{appId}/env": [{
    "verb": "GET",
    "name": "editApplicationEnv",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }],
  "/self/applications/{appId}/env/{envName}": [{
    "verb": "DELETE",
    "name": "removeApplicationEnv",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "envName",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "editApplicationEnv",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "envName",
      "style": "template"
    }]
  }],
  "/self/applications/{appId}/instance": [{
    "verb": "PUT",
    "name": "changeApplicationType",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "type",
      "style": "query"
    }, {
      "name": "version",
      "style": "query"
    }]
  }],
  "/self/applications/{appId}/instances": [{
    "verb": "DELETE",
    "name": "undeployApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }, {
    "verb": "GET",
    "name": "getApplicationInstances",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }, {
    "verb": "POST",
    "name": "redeployApplication",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }],
  "/self/applications/{appId}/logs": [{
    "verb": "GET",
    "name": "getApplicationLogs",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "orger",
      "style": "query"
    }, {
      "name": "since",
      "style": "query"
    }]
  }],
  "/self/applications/{appId}/tags": [{
    "verb": "GET",
    "name": "getApplicationTags",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }],
  "/self/applications/{appId}/tags/{tag}": [{
    "verb": "DELETE",
    "name": "deleteApplicationTag",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "tag",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "addApplicationTag",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "tag",
      "style": "template"
    }]
  }],
  "/self/applications/{appId}/vhosts": [{
    "verb": "GET",
    "name": "getVhosts",
    "params": [{
      "name": "appId",
      "style": "template"
    }]
  }],
  "/self/applications/{appId}/vhosts/{domain}": [{
    "verb": "DELETE",
    "name": "removeVhost",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "domain",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "addVhost",
    "params": [{
      "name": "appId",
      "style": "template"
    }, {
      "name": "domain",
      "style": "template"
    }]
  }],
  "/self/change_password": [{
    "verb": "PUT",
    "name": "changeUserPassword",
    "params": []
  }],
  "/self/confirmation_email": [{
    "verb": "GET",
    "name": "getConfirmationEmail",
    "params": []
  }],
  "/self/credits": [{
    "verb": "GET",
    "name": "getAmount",
    "params": []
  }],
  "/self/credits/history": [{
    "verb": "GET",
    "name": "getStats",
    "params": [{
      "name": "type",
      "style": "query"
    }, {
      "name": "appId",
      "style": "query"
    }, {
      "name": "from",
      "style": "query"
    }, {
      "name": "to",
      "style": "query"
    }]
  }],
  "/self/emails": [{
    "verb": "GET",
    "name": "getEmailAddresses",
    "params": []
  }],
  "/self/emails/{email}": [{
    "verb": "DELETE",
    "name": "removeEmailAddress",
    "params": [{
      "name": "email",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "addEmailAddress",
    "params": [{
      "name": "email",
      "style": "template"
    }]
  }],
  "/self/feedbacks": [{
    "verb": "POST",
    "name": "report",
    "params": []
  }],
  "/self/instances": [{
    "verb": "GET",
    "name": "getInstancesForAllApps",
    "params": []
  }],
  "/self/intercomhash": [{
    "verb": "GET",
    "name": "getIntercomeSecureModeHash",
    "params": []
  }],
  "/self/keys": [{
    "verb": "GET",
    "name": "getSshKeys",
    "params": []
  }],
  "/self/keys/{key}": [{
    "verb": "DELETE",
    "name": "removeSshKey",
    "params": [{
      "name": "key",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "addSshKey",
    "params": [{
      "name": "key",
      "style": "template"
    }]
  }],
  "/self/payment-info": [{
    "verb": "GET",
    "name": "getPaymentInfo",
    "params": []
  }],
  "/self/payments/billings": [{
    "verb": "GET",
    "name": "getInvoices",
    "params": []
  }, {
    "verb": "POST",
    "name": "buyDrops",
    "params": []
  }],
  "/self/payments/billings/{bid}": [{
    "verb": "GET",
    "name": "getInvoice",
    "params": [{
      "name": "bid",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "choosePaymentMethod",
    "params": [{
      "name": "bid",
      "style": "template"
    }]
  }],
  "/self/payments/cards": [{
    "verb": "GET",
    "name": "getUserCards",
    "params": []
  }],
  "/self/payments/cards/{cardId}": [{
    "verb": "DELETE",
    "name": "deleteUserCard",
    "params": [{
      "name": "cardId",
      "style": "template"
    }]
  }],
  "/self/payments/recurring": [{
    "verb": "DELETE",
    "name": "deleteRecurrentPayment",
    "params": []
  }, {
    "verb": "GET",
    "name": "getRecurrentPayment",
    "params": []
  }, {
    "verb": "PUT",
    "name": "createRecurrentPayment",
    "params": []
  }],
  "/self/tokens": [{
    "verb": "GET",
    "name": "getSelfTokens",
    "params": []
  }],
  "/self/tokens/{token}": [{
    "verb": "DELETE",
    "name": "revokeToken",
    "params": [{
      "name": "token",
      "style": "template"
    }]
  }],
  "/self/validate_email": [{
    "verb": "GET",
    "name": "validateEmail",
    "params": [{
      "name": "validationKey",
      "style": "query"
    }]
  }],
  "/session/login": [{
    "verb": "GET",
    "name": "getLoginForm",
    "params": [{
      "name": "invitationKey",
      "style": "query"
    }, {
      "name": "validationKey",
      "style": "query"
    }, {
      "name": "secondaryEmailKey",
      "style": "query"
    }, {
      "name": "deletionKey",
      "style": "query"
    }, {
      "name": "url_next",
      "style": "query"
    }, {
      "name": "fromAuthorize",
      "style": "query"
    }]
  }, {
    "verb": "POST",
    "name": "login",
    "params": [{
      "name": "email",
      "style": "query"
    }, {
      "name": "pass",
      "style": "query"
    }, {
      "name": "invitationKey",
      "style": "query"
    }, {
      "name": "url_next",
      "style": "query"
    }, {
      "name": "from_authorize",
      "style": "query"
    }]
  }],
  "/session/signup": [{
    "verb": "GET",
    "name": "getSignupForm",
    "params": [{
      "name": "invitationKey",
      "style": "query"
    }, {
      "name": "url_next",
      "style": "query"
    }]
  }],
  "/users": [{
    "verb": "GET",
    "name": "getUsers",
    "params": []
  }, {
    "verb": "POST",
    "name": "createUser",
    "params": [{
      "name": "invitationKey",
      "style": "query"
    }, {
      "name": "addonBetaInvitationKey",
      "style": "query"
    }]
  }, {
    "verb": "POST",
    "name": "createUserFromForm",
    "params": [{
      "name": "invitationKey",
      "style": "query"
    }, {
      "name": "addonBetaInvitationKey",
      "style": "query"
    }, {
      "name": "email",
      "style": "query"
    }, {
      "name": "pass",
      "style": "query"
    }, {
      "name": "url_next",
      "style": "query"
    }, {
      "name": "terms",
      "style": "query"
    }]
  }],
  "/users/{id}": [{
    "verb": "GET",
    "name": "getUser",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }],
  "/users/{id}/applications": [{
    "verb": "GET",
    "name": "getApplications",
    "params": [{
      "name": "id",
      "style": "template"
    }]
  }],
  "/validation/vat/{key}": [{
    "verb": "GET",
    "name": "validate",
    "params": [{
      "name": "key",
      "style": "template"
    }, {
      "name": "action",
      "style": "query"
    }]
  }],
  "/vat_check": [{
    "verb": "GET",
    "name": "checkVat",
    "params": [{
      "name": "country",
      "style": "query"
    }, {
      "name": "vat",
      "style": "query"
    }]
  }],
  "/vendor/apps": [{
    "verb": "GET",
    "name": "listApps",
    "params": [{
      "name": "offset",
      "style": "query"
    }]
  }],
  "/vendor/apps/{addonId}": [{
    "verb": "GET",
    "name": "getApplicationInfo",
    "params": [{
      "name": "addonId",
      "style": "template"
    }]
  }, {
    "verb": "PUT",
    "name": "editApplicationConfiguration",
    "params": [{
      "name": "addonId",
      "style": "template"
    }]
  }]
};

if(typeof _ == "undefined") {
  _ = require("lodash");
}

if(typeof WadlClient == "undefined") {
  WadlClient = require("wadl-client");
}


function initializeAddonProvider(client, settings) {
  var AddonProvider = {};

  AddonProvider.getAll = function() {
    return client.addons.providers.get()();
  };

  AddonProvider.get = function(providerId, orgaId) {
    var params = orgaId ? [orgaId, providerId] : [providerId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addonproviders._.get.apply(client, params)();
  };

  AddonProvider.update = function(provider, orgaId) {
    var params = orgaId ? [orgaId, provider.id] : [provider.id];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addonproviders._.put.apply(client, params)(JSON.stringify(provider));
  };

  AddonProvider.getPlans = function(providerId, orgaId) {
    var params = orgaId ? [orgaId, providerId] : [providerId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addonproviders._.plans.get.apply(client, params)();
  };

  AddonProvider.editPlan = function(plan, providerId, orgaId) {
    var params = orgaId ? [orgaId, providerId, plan.id] : [providerId, plan.id];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addonproviders._.plans._.put.apply(client, params)(JSON.stringify(plan));
  };

  AddonProvider.addPlan = function(plan, providerId, orgaId) {
    var params = orgaId ? [orgaId, providerId] : [providerId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addonproviders._.plans.post.apply(client, params)(JSON.stringify(plan));
  };

  AddonProvider.removePlan = function(planId, providerId, orgaId) {
    var params = orgaId ? [orgaId, providerId, planId] : [providerId, planId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addonproviders._.plans._.remove.apply(client, params)();
  };

  AddonProvider.getFeatures = function(providerId, orgaId) {
    var params = orgaId ? [orgaId, providerId] : [providerId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addonproviders._.features.get.apply(client, params)();
  };

  AddonProvider.addFeature = function(feature, providerId, orgaId) {
    var params = orgaId ? [orgaId, providerId] : [providerId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addonproviders._.features.post.apply(client, params)(JSON.stringify(feature));
  };

  AddonProvider.removeFeature = function(featureId, providerId, orgaId) {
    var params = orgaId ? [orgaId, providerId, encodeURIComponent(btoa(featureId))] : [providerId, encodeURIComponent(btoa(featureId))];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addonproviders._.features._.remove.apply(client, params)();
  };

  return AddonProvider;
}


function initializeAddon(client, settings) {
  var Addon = {};

  Addon.getPlanFeaturesDescription = function(plan) {
    return _.chain(plan.features).sortBy('name').map(function(feature) {
      return feature.name + "=" + feature.value;
    }).value().join(', ');
  };

  Addon.getAll = function(orgaId) {
    var params = orgaId ? [orgaId] : [];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addons.get.apply(client, params)();
  };

  Addon.provision = function(information, providerId, planId, paymentToken, orgaId) {
    var params = orgaId ? [orgaId] : [];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addons.post.apply(client, params)(JSON.stringify({
      name: information.name,
      region: information.region,
      providerId: providerId,
      plan: planId,
      payment: paymentToken
    }));
  };

  Addon.get = function(addonId, orgaId) {
    var params = orgaId ? [orgaId, addonId] : [addonId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addons._.get.apply(client, params)();
  };

  Addon.changePlan = function(planId, addonId, orgaId) {
    var params = orgaId ? [orgaId, addonId] : [addonId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addons._.put.apply(client, params)(JSON.stringify(planId));
  };

  Addon.remove = function(addonId, orgaId) {
    var params = orgaId ? [orgaId, addonId] : [addonId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addons._.remove.apply(client, params)();
  };

  Addon.getSSOData = function(addonId, orgaId) {
    var params = orgaId ? [orgaId, addonId] : [addonId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addons._.sso.get.apply(client, params)();
  };

  Addon.getLinkedApplications = function(addonId, orgaId) {
    var params = orgaId ? [orgaId, addonId] : [addonId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addons._.applications.get.apply(client, params)();
  };

  Addon.getTags = function(addonId, orgaId) {
    var params = orgaId ? [orgaId, addonId] : [addonId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addons._.tags.get.apply(client, params)();
  };

  Addon.addTag = function(tag, addonId, orgaId) {
    var params = orgaId ? [orgaId, addonId, encodeURIComponent(tag)] : [addonId, encodeURIComponent(tag)];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addons._.tags._.put.apply(client, params)();
  };

  Addon.removeTag = function(tag, addonId, orgaId) {
    var params = orgaId ? [orgaId, addonId, encodeURIComponent(tag)] : [addonId, encodeURIComponent(tag)];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.addons._.tags._.remove.apply(client, params)();
  };

  return Addon;
}


function initializeApplication(client, settings) {
  var Application = {};

  Application.create = function(application, orgaId) {
    var params = orgaId ? [orgaId, application.id] : [application.id];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications.post.apply(client, params)(JSON.stringify(application));
  };

  Application.get = function(appId, orgaId) {
    var params = orgaId ? [orgaId, appId] : [appId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.get.apply(client, params)();
  };

  Application.edit = function(app, orgaId) {
    var params = orgaId ? [orgaId, app.id] : [app.id];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.put.apply(client, params)(JSON.stringify(app));
  };

  Application.remove = function(appId, orgaId) {
    var params = orgaId ? [orgaId, appId] : [appId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.remove.apply(client, params)();
  };

  Application.getVhosts = function(appId, orgaId) {
    var params = orgaId ? [orgaId, appId] : [appId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.vhosts.get.apply(client, params)();
  };

  Application.addVhost = function(vhost, appId, orgaId) {
    var params = orgaId ? [orgaId, appId, vhost] : [appId, vhost];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.vhosts._.put.apply(client, params)();
  };

  Application.removeVhost = function(vhost, appId, orgaId) {
    var params = orgaId ? [orgaId, appId, vhost.fqdn] : [appId, vhost.fqdn];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.vhosts._.remove.apply(client, params)();
  };

  Application.getInstances = function(appId, orgaId) {
    var params = orgaId ? [orgaId, appId] : [appId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.instances.get.apply(client, params)();
  };

  Application.redeploy = function(appId, orgaId) {
    var params = orgaId ? [orgaId, appId] : [appId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.instances.post.apply(client, params)();
  };

  Application.undeploy = function(appId, orgaId) {
    var params = orgaId ? [orgaId, appId] : [appId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.instances.remove.apply(client, params)();
  };

  Application.getLogs = function(appId, orgaId, timestamp) {
    var params = orgaId ? [orgaId, appId] : [appId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.logs.get.apply(client, params)(timestamp ? {query: {since: timestamp}} : null);
  };

  Application.getInstanceIdsFromLogs = function(logs) {
    return _.chain(logs).map(function(log) {
      return log._source["@source_host"];
    }).unique().value();
  };

  Application.getAddons = function(appId, orgaId) {
    var params = orgaId ? [orgaId, appId] : [appId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.addons.get.apply(client, params)();
  };

  Application.linkAddon = function(appId, addonId, orgaId) {
    var params = orgaId ? [orgaId, appId] : [appId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.addons.post.apply(client, params)(JSON.stringify(addonId));
  };

  Application.unlinkAddon = function(appId, addonId, orgaId) {
    var params = orgaId ? [orgaId, appId, addonId] : [appId, addonId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.addons._.remove.apply(client, params)();
  };

  Application.getEnvVariables = function(appId, orgaId) {
    var params = orgaId ? [orgaId, appId] : [appId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.env.get.apply(client, params)();
  };

  Application.setEnvVariable = function(key, value, appId, orgaId) {
    var encodedKey = encodeURIComponent(key.toUpperCase());
    var params = orgaId ? [orgaId, appId, encodedKey] : [appId, encodedKey];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.env._.put.apply(client, params)(JSON.stringify(value));
  };

  Application.removeEnvVariable = function(key, appId, orgaId) {
    var encodedKey = encodeURIComponent(key.toUpperCase());
    var params = orgaId ? [orgaId, appId, encodedKey] : [appId, encodedKey];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.applications._.env._.remove.apply(client, params)();
  };

  return Application;
}


function initializeInvoice(client, settings) {
  var Invoice = {};

  Invoice.createInvoice = function(pack, orgaId) {
    var params = orgaId ? [orgaId] : [];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.payments.billings.post.apply(client, params)(JSON.stringify(pack));
  };

  Invoice.getPaymentMethods = function() {
    return client.payments.methods.get()();
  };

  Invoice.choosePaymentMethod = function(method, invoice, orgaId) {
    var params = orgaId ? [orgaId, invoice.id] : [invoice.id];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.payments.billings._.put.apply(client, params)(JSON.stringify(method));
  };

  Invoice.getPaymillKey = function() {
    return client.payments.publickeys.paymill.get()();
  };

  Invoice.get = function(invoiceId, orgaId) {
    var params = orgaId ? [orgaId, invoiceId] : [invoiceId];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.payments.billings._.get.apply(client, params)();
  };

  Invoice.getAll = function(orgaId) {
    var params = orgaId ? [orgaId] : [];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.payments.billings.get.apply(client, params)();
  };

  return Invoice;
}


function initializeNews(client, settings) {
  var News = {};

  var browser_xml2entries = function(xml) {
    var result = new Promise();
    var $feed = xml.getElementsByTagName("feed")[0];

    if(!$feed) {
      result.reject(xml);
    }
    else {
      var $entries = $feed.getElementsByTagName("entry");

      var entry2post = function(entry) {
        return {
          title: entry.getElementsByTagName("title")[0].childNodes[0].data,
          href: entry.getElementsByTagName("link")[0].getAttribute("href"),
          updated: new Date(entry.getElementsByTagName("updated")[0].childNodes[0].data)
        };
      };

      result.resolve(_.map($entries, entry2post));
    }

    return result;
  };

  var node_xml2entries = function(xml) {
    var $feed = xml && xml.feed && xml.feed[0];
    var entries = _.map($feed.entry, function($entry) {
      return {
        title: $entry.title && $entry.title[0] && $entry.title[0].$t,
        link: $entry.link && $entry.link[0] && $entry.link[0].href,
        updated: $entry.updated && $entry.updated[0] && new Date($entry.updated[0])
      };
    });

    return Promise.of(entries);
  };

  var xml2entries = (typeof module != "undefined" && module.exports && typeof require == "function") ? node_xml2entries : browser_xml2entries;

  News.getBlogPosts = function() {
    return client.newsfeeds.blog.get()().chain(xml2entries);
  };

  News.getEngineeringPosts = function() {
    return client.newsfeeds.engineering.get()().chain(xml2entries);
  };

  return News;
}


function initializeOrganisation(client, settings) {
  var Organisation = {};

  Organisation.getAll = function(userId) {
    return client.organisations.get()({
      query: {
        user: userId
      }
    });
  };

  Organisation.get = function(orgaId) {
    return client.organisations._.get(orgaId)();
  };

  Organisation.update = function(orga) {
    return client.organisations._.put(orga.id)(JSON.stringify(orga));
  };

  Organisation.create = function(orga) {
    return client.organisations.post()(JSON.stringify(orga));
  };

  Organisation.remove = function(orgaId) {
    return client.organisations._.remove(orgaId)();
  };

  Organisation.addMember = function(member, orgaId) {
    return client.organisations._.members.post(orgaId)(JSON.stringify(member));
  };

  Organisation.confirmMembership = function(params, orgaId) {
    return client.organisations._.members.post(orgaId)({
      query: params,
    });
  };

  Organisation.removeMember = function(memberId, orgaId) {
    return client.organisations._.members._.remove(orgaId, memberId)();
  };

  return Organisation;
}


function initializeProducts(client, settings) {
  var Products = {};

  Products.getInstances = function(orgaId) {
    return client.products.instances.get()({
      query: orgaId ? {"for": orgaId} : {}
    });
  };

  Products.getPackages = function(couponName, orgaId) {
    var query = _.extend({}, couponName && {coupon: couponName}, orgaId && {orgaId: orgaId});

    return client.products.packages.get()({query: query});
  };

  Products.getPrices = function() {
    return client.products.prices.get()();
  };

  Products.getCoupon = function(coupon) {
    return client.payments.coupons._.get(coupon)();
  };

  Products.getZones = function() {
    return client.products.zones.get()();
  };

  return Products;
}


function initializeSession(client, settings) {
  var Session = {};

  Session.getOAuthParams = function(params, token_secret) {
    return _.extend({
      oauth_consumer_key: settings.API_CONSUMER_KEY,
      oauth_signature_method: 'PLAINTEXT',
      oauth_signature: settings.API_CONSUMER_SECRET + '&' + (token_secret || ''),
      oauth_timestamp: Math.floor(Date.now()/1000),
      oauth_nonce: Math.floor(Math.random()*1000000)
    }, params);
  };

  Session.login = function() {
    var res = client.oauth.request_token.post()({
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      data: querystring.encode(Session.getOAuthParams({
        oauth_callback: window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.search
      }))
    });

    return res.map(function(text) {
      var parsed = querystring.decode(text);

      localStorage.consumer_oauth_token = parsed.oauth_token;
      localStorage.consumer_oauth_token_secret = parsed.oauth_token_secret;

      window.location = settings.API_HOST + '/oauth/authorize?oauth_token=' + encodeURIComponent(parsed.oauth_token);
    });
  };

  Session.getAccessTokenFromQueryString = function() {
    var params = querystring.decode(window.location.search.slice(1));
    return Session.getAccessToken(params);
  };

  Session.getAccessToken = function(params) {
    var res = client.oauth.access_token.post()({
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      data: querystring.encode(Session.getOAuthParams(params, localStorage.consumer_oauth_token_secret))
    });

    return res.map(function(text) {
      var parsed = querystring.decode(text);

      localStorage.user_oauth_token = parsed.oauth_token;
      localStorage.user_oauth_token_secret = parsed.oauth_token_secret;

      return parsed;
    });
  };

  Session.getAuthorization = function() {
    if(localStorage.user_oauth_token && localStorage.user_oauth_token_secret) {
      var params = Session.getOAuthParams({oauth_token: localStorage.user_oauth_token}, localStorage.user_oauth_token_secret);
      return  ['OAuth realm="http://ccapi.cleverapps.io/v2/oauth"',
              'oauth_consumer_key="' + params.oauth_consumer_key + '"',
              'oauth_token="' + params.oauth_token + '"',
              'oauth_signature_method="' + params.oauth_signature_method + '"',
              'oauth_signature="' + params.oauth_signature + '"',
              'oauth_timestamp="' + params.oauth_timestamp + '"',
              'oauth_nonce="' + params.oauth_nonce + '"'].join(', ');
    }
    else {
      return '';
    }
  };

  Session.remove = function() {
    localStorage.removeItem("consumer_oauth_token");
    localStorage.removeItem("consumer_oauth_token_secret");
    localStorage.removeItem("user_oauth_token");
    localStorage.removeItem("user_oauth_token_secret");
  };

  return Session;
}


function initializeStatistics(client, settings) {
  var Statistics = {};

  Statistics.getCredits = function(orgaId) {
    var params = orgaId ? [orgaId] : [];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.credits.get.apply(client, params)();
  };

  Statistics.getConsumptions = function(options, orgaId) {
    var params = orgaId ? [orgaId] : [];
    var owner = orgaId ? client.organisations._ : client.self;

    return owner.credits.history.get.apply(client, params)({query: options});
  };

  Statistics.getConsumptionsByAppAndByDate = function(price, consumptions) {
    var startOfDay = function(timestamp) {
      var day = new Date(timestamp);
      return new Date(day.getFullYear(), day.getMonth(), day.getDate()).getTime();
    };

    return _.foldl(consumptions, function(consumptionsByAppAndByDate, consumption) {
      var cc = consumptionsByAppAndByDate;
      var date = startOfDay(consumption.date);

      cc[consumption.appId] = cc[consumption.appId] || {};
      cc[consumption.appId][date] = (cc[consumption.appId][date] || 0) - consumption.delta * price.value;

      return cc;
    }, {});
  };

  return Statistics;
}


function initializeUser(client, settings) {
  var User = {};

  User.get = function() {
    return client.self.get()();
  };

  User.update = function(information) {
    return client.self.put()(JSON.stringify(information));
  };

  User.changePassword = function(oldPassword, newPassword) {
    return client.self.change_password.put()(JSON.stringify({
      oldPassword: oldPassword,
      newPassword: newPassword
    }));
  };

  User.getEmailAddresses = function() {
    return client.self.emails.get()();
  };

  User.addEmailAddress = function(address) {
    return client.self.emails._.put(address)();
  };

  User.removeEmailAddress = function(address) {
    return client.self.emails._.remove(address)();
  };

  User.getSSHKeys = function() {
    return client.self.keys.get()();
  };

  User.addSSHKey = function(name, key) {
    return client.self.keys._.put(encodeURIComponent(name))(JSON.stringify(key));
  };

  User.removeSSHKey = function(name) {
    return client.self.keys._.remove(encodeURIComponent(name))();
  };

  User.getCreditCards = function() {
    return client.self.payments.cards.get()();
  };

  User.getTokens = function() {
    return client.self.tokens.get()();
  };

  User.removeToken = function(token) {
    return client.self.tokens._.remove(token)();
  };

  return User;
}


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

if(typeof module != "undefined" && module.exports) {
  module.exports = CleverAPI;
}
