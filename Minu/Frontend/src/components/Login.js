import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        try{
            await axios.post('http://localhost:8080/login',{
                email,password
            })

        }
       catch(e){
        console.log(e);

        }
        navigate('/')

    }




    return (
        <div className="login">
            <h1>Login</h1>
            <form action='POST'>
                <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' name='' id='' />
                <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name='' id='' />

                <input type='submit' onClick={submit} />

            </form>
            <br />
            <p>OR</p>
            <br />

            <Link to='/signup'>Signup Page</Link>


        </div>
    )
}

export default Login
