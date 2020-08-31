require('dotenv').config();

const express = require("express");
const app = express();
app.use(express.static(__dirname + "/../client/dist"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const morgan = require('morgan');
app.use(morgan('dev'));

//Routes
const movieRoutes = require("./routes/movieRoutes.js");

//Use routes
app.use("/movies", movieRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000!");
});