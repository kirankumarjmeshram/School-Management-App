const express = require("express");
const { errorHandler } = require("./src/middleware/errorMiddleware");
const connect = require("./src/configs/db");
const adminController = require('./src/controllers/admin.controller')

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/admin', adminController)

app.use(errorHandler);

app.listen(3031, () => {
    connect();
    console.log('Server started on port 3031');
});
