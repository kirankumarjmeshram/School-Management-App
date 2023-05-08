const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require("cors");
const path = require('path');
const userRoute = require("./route/router")
const connectDB = require('./database/connection');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config({
  path: path.join(__dirname, ".env"),
});

connectDB()


app.use("/users", userRoute);


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server started at port: " + PORT);
});