import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    password2:""
  })

  const {name, email, password, password2} = formData;

  const onChange = (e) => {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section>
        <h1> Register </h1>
        <p>Please create an account</p>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <div>
            <input type='text' name='name' value={name} placeholder='Enter your name' onChange={onChange} />
          </div>
          <div>
            <input type='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} />
          </div>
          <div>
            <input type='password' name='password' value={password} placeholder='Enter password' onChange={onChange} />
          </div>
          <div>
          <input type='password' name='password2' value={password2} placeholder='Confirm password' onChange={onChange} />
          </div>
          <div>
            <button type='submit'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register