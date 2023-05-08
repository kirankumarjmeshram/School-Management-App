const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var RegisterUserScehema = mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        unique: true,
        required: true,
    },
    password :{
        type : String,
        required: true,
      }

      

  
},
{ timestamps: true })

// RegisterUserScehema.pre("save", function (next) {
//     var salt = bcrypt.genSaltSync(10);
  
//     if (this.password && this.isModified("password")) {
//       this.password = bcrypt.hashSync(this.password, salt);
//     }
//     next();
//   });
  


const RegisterUsers = mongoose.model("RegisterUsers", RegisterUserScehema);

module.exports = RegisterUsers;