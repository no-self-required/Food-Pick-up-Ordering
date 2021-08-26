// load .env data into process.env
require('dotenv').config();


// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";

const http = require('http');
const express = require("express");
const session = require('express-session');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");

const app = express();

const morgan = require('morgan');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(session({
  secret: 'secret'
}))

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const widgetsRoutes = require("./routes/widgets");
const usersRoutes = require("./server/users.js");
const orderRoutes = require("./server/order.js");
const loginRoutes = require("./server/login-page.js");
const orderConfirmationRoutes = require("./server/order-confirmation.js");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use("/api/users", usersRoutes(db));
// app.use("/api/widgets", widgetsRoutes(db));
app.use("/users", usersRoutes(db));
app.use("/order", orderRoutes(db));
app.use("/login", loginRoutes(db));
app.use("/order-confirmation", orderConfirmationRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render('index');
});

// app.post('/sms', (req, res) => {
//   const twiml = new MessagingResponse();

//   twiml.message('The Robots are coming! Head for the hills!');

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });

// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on port 1337');
// });

// app.get('/order-confirmation', (req, res) => {
//   res.render('order_status');
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
