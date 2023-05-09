const express = require("express");
const router = express.Router();
const {studentAdd,studentList,studentDelete,studentUpdate,getSingleStudent} = require("../controllers/student.controller");

const bodyParser = require("body-parser");
router.use(bodyParser.json());

// Student Access Routes

router.get("/all", studentList);
router.post("/add", studentAdd);
router.delete("/delete/:id",studentDelete );
router.put("/update/:id",studentUpdate);
router.get("/single/:id",getSingleStudent);


module.exports = router;