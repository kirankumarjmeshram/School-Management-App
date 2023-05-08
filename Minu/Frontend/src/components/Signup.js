import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        try{
            await axios.post('http://localhost:8080/signup',{
                email,password
            })

        }
       catch(e){
        console.log(e);

        }
        navigate('/')

    }




    return (
        <div className="signup">
            <h1>Signup</h1>
            <form action='POST'>
                <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' name='' id='' />
                <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name='' id='' />

                <input type='submit' onClick={submit} />

            </form>
            <br />
            <p>OR</p>
            <br />

            <Link to='/login'>Login page</Link>


        </div>
    )
}

export default Signup
