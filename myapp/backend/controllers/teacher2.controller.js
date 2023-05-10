const Teachers = require("../models/teacher2.model");

//Get all items
const teacherList = async (req, res) => {
  let data = await Teachers.find();

  // res.json(data);
  res.status(200).send({
    success: true,
    message: "All teacher Get Successfully",
    data: data,
  });
};

// teacherAdd
const teacherAdd = async (req, res) => {
  
  try {
   
    const teacher = new Teachers({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        });

   
    let response = await teacher.save();
    console.log("response", response);

    res.status(201).send({
      success: true,
      message: "teacher saved successfully",
      data: teacher,
    });

  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};



// teacherUpdate
const teacherUpdate = async (req, res) => {

  try {
    const teacher = await Teachers.findById(req.params.id);
    if (!teacher) {
      return res
        .status(404)
        .send({ success: false, message: "teacher Not Found" });
    }
    teacher.name = req.body.name || teacher.name;
    teacher.email = req.body.email || teacher.email;
    teacher.phoneNumber = req.body.phoneNumber || teacher.phoneNumber;
   
    const updatedTeacher = await teacher.save();
    res.status(200).send({
      success: true,
      message: "teacher Updated successfully",
      data: updatedTeacher,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// teacherDelete
const teacherDelete = async (req, res) => {
try{
    const teacher = await Teachers.findByIdAndDelete(req.params.id);
    if (!teacher) {
      return res
        .status(404)
        .send({ success: false, message: "teacher Not Found" });
    }

    res.status(200).send({
      success: true,
      message: "teacher deleted succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error.message,
    });
  }
};

// getSingleteacher
const getSingleTeacher = async (req, res) => {
  try {
   
    const teacher = await Teachers.findById(req.params.id);
    if (!teacher) {
      return res
        .status(404)
        .send({ success: false, message: "teacher Not Found" });
    }

    res
      .status(200)
      .send({ success: true, message: "teacher saved successfully", data: teacher });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
module.exports = {
    teacherAdd,teacherList,teacherDelete,getSingleTeacher,teacherUpdate
};

