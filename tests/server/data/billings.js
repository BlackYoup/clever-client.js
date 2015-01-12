var users = require('./users.js');
var organisations = require('./organisations.js');

module.exports = {
  "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb": {
    id: "user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb",
    status: "PAID",
    name: users["user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb"].name,
    address: users["user_c27c26e4-bf7b-4835-8df7-6472dc25cfdb"].address
  },
  "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d": {
    id: "orga_5a58bf40-3fd6-47b2-adec-41d43becef8d",
    status: "PENDING",
    name: organisations["orga_5a58bf40-3fd6-47b2-adec-41d43becef8d"].name,
    address: organisations["orga_5a58bf40-3fd6-47b2-adec-41d43becef8d"].address
  }
};
