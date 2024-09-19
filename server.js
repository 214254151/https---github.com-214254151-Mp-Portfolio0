require("dotenv").config;

const express = require("express");
const cors = require("cors");
const path = require("path");

const contactRoute = require('./route/contactRoute')

const app = express();

//Creating Miidlewareclear
app.use(express.json());
app.use(cors());

// cinfiguring sever
app.use("/", contactRoute);

// creating the port and shafling it to the env
const port = process.env.PORT || 5001;
app.listen(port, console.log('server listening to port 5001 only'));