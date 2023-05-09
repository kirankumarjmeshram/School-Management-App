const Students = require("../models/student.model");

//Get all items
const studentList = async (req, res) => {
  let data = await Students.find();

  // res.json(data);
  res.status(200).send({
    success: true,
    message: "All student Get Successfully",
    data: data,
  });
};

// studentAdd
const studentAdd = async (req, res) => {
  
  try {
   
    const student = new Students({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        });

   
    let response = await student.save();
    console.log("response", response);

    res.status(201).send({
      success: true,
      message: "student saved successfully",
      data: student,
    });

  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};



// studentUpdate
const studentUpdate = async (req, res) => {

  try {
    const student = await Students.findById(req.params.id);
    if (!student) {
      return res
        .status(404)
        .send({ success: false, message: "student Not Found" });
    }
    student.name = req.body.name || student.name;
    student.email = req.body.email || student.email;
    student.phoneNumber = req.body.phoneNumber || student.phoneNumber;
   
    const updatedStudent = await student.save();
    res.status(200).send({
      success: true,
      message: "student Updated successfully",
      data: updatedStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// studentDelete
const studentDelete = async (req, res) => {
try{
    const student = await Students.findByIdAndDelete(req.params.id);
    if (!student) {
      return res
        .status(404)
        .send({ success: false, message: "student Not Found" });
    }

    res.status(200).send({
      success: true,
      message: "student deleted succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error.message,
    });
  }
};

// getSinglestudent
const getSingleStudent = async (req, res) => {
  try {
   
    const student = await Students.findById(req.params.id);
    if (!student) {
      return res
        .status(404)
        .send({ success: false, message: "student Not Found" });
    }

    res
      .status(200)
      .send({ success: true, message: "Student saved successfully", data: student });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
module.exports = {
    studentAdd,studentList,studentDelete,getSingleStudent,studentUpdate
};

