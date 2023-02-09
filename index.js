const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
var bodyParser = require("body-parser");

dotenv.config({ path: './config/config.env' });

console.log(`Trying to connect to ${process.env.MONGO}`)
mongoose.connect(process.env.MONGO).then(() => console.log(`Connected Succefully`)).catch(err => console.log(err));


const bootcamps = require('./routes/bootcamp');
const User = require('./models/User');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1/bootcamp", bootcamps);



app.listen(process.env.PORT, console.log(`server is listening to ${process.env.PORT} in ${process.env.NODE_ENV} mode`));