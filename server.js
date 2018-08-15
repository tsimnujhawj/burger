const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");

const app = express();

app.use(express.static("public"));

