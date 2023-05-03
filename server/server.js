//const path = require("path");
const express = require("express");
// const colors = require("colors");
// const dotenv = require("dotenv").config();
const { errorHandler } = require("./src/middleware/errorMiddleware");
const connect = require("./src/configs/db");
const adminController = require('./src/controllers/admin.controller')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/admin', adminController)


// Serve frontend
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, "../", "frontend", "build", "index.html")
//     )
//   );
// } else {
//   app.get("/", (req, res) => res.send("Please set to production"));
// }

app.use(errorHandler);

app.listen(3031, () => {
    connect();
    console.log('Server started on port 3031');
});
