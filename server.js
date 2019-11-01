const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/account")

const config = require("./util/config");

const app = express();


mongoose.connect(config.database, { useNewUrlParser: true }, err => {
	if (err) {
	  	console.log("Connection Error \n" + err);
	    } else {
		console.log("Successfully connected to the database");
	    }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/accounts", userRoutes);

app.listen(config.port, err => {
	  console.log("Application server running on port " + config.port);
});

