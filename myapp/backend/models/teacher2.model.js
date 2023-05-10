const mongoose = require('mongoose');

var teacherSchema = new mongoose.Schema({
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

const Teacher = mongoose.model("Teachers2", teacherSchema);

module.exports = Teacher;