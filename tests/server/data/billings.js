var users = require('./users.js');
var organisations = require('./organisations.js');

module.exports = {
  "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb": {
    "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb1419416454687": {
      id: "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb1419416454687",
      status: "PAID",
      name: users["user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb"].name,
      address: users["user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb"].address,
      emissionDate: 1419416454687
    },
    "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb1418056876389": {
      id: "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb1418056876389",
      status: "PENDING",
      name: users["user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb"].name,
      address: users["user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb"].address,
      emissionDate: 1418056876389
    }
  },
  "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d": {
    "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d1418056791269": {
      id: "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d1418056791269",
      status: "PAID",
      name: organisations["orga_5a58bf40-3fd6-47b2-adec-41d43becef8d"].name,
      address: organisations["orga_5a58bf40-3fd6-47b2-adec-41d43becef8d"].address,
      emissionDate: 1418056791269
    },
    "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d1418054716851": {
      id: "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d1418054716851",
      status: "PENDING",
      name: organisations["orga_5a58bf40-3fd6-47b2-adec-41d43becef8d"].name,
      address: organisations["orga_5a58bf40-3fd6-47b2-adec-41d43becef8d"].address,
      emissionDate: 1418054716851
    }
  }
};
