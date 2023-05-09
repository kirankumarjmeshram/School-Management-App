import React, { useState } from "react";
import { Link } from "react-router-dom";

 const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(email);


        const empdata={name,email,phoneNumber,password};

        console.log(empdata)
      

        fetch("http://localhost:8080/users/register",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(empdata)
        }).then((res)=>{
          alert('Register successfully.')
          console.log("resdata",res.data)
        }).catch((err)=>{
          console.log(err.message)
        })

    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="phone">PhoneNumber</label>
            <input value={phoneNumber} onChange={(e) => setPhone(e.target.value)}type="phone" placeholder="+917865432189" id="phone" name="phone" />

            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Submit</button>
        </form>
        <Link to={`/users/signin`}>
        <button className="link-btn" >Already have an account? Login here.</button>
        </Link>
    </div>
    )
}

export default Register