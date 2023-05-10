const express = require("express");
const router = express.Router();
const {teacherAdd,teacherList,teacherDelete,teacherUpdate,getSingleTeacher} = require("../controllers/teacher2.controller");

const bodyParser = require("body-parser");
router.use(bodyParser.json());

// Student Access Routes

router.get("/all", teacherList);
router.post("/add", teacherAdd);
router.delete("/delete/:id",teacherDelete );
router.put("/update/:id",teacherUpdate);
router.get("/single/:id",getSingleTeacher);


module.exports = router;