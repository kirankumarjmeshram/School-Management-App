const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        unique: true,
        required: true,
    }
 


})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;