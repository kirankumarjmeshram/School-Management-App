import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })

  const {email, password } = formData;

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
        <h1> Login </h1>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <div>
            <input type='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} />
          </div>
          <div>
            <input type='password' name='password' value={password} placeholder='Enter password' onChange={onChange} />
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

export default Login