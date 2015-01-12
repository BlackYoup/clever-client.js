var express = require("express");

var app = express();

app.use(express.static("."));
app.use(require("./session.js"));
app.use(require("./self.js"));
app.use(require("./organisations.js"));
app.use(require("./applications.js"));
app.use(require("./addons.js"));
app.use(require("./validation.js"));

app.listen(1234);
console.log("test server listening on port 1234…");
