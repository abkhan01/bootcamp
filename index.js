const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

console.log(process.env.PORT);

const bootcamps = require('./routes/bootcamp');

const app = express();
app.use("/api/v1/bootcamp", bootcamps);

app.listen(process.env.PORT, console.log(`server is listening to ${process.env.PORT} in ${process.env.NODE_ENV} mode`));