import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { register, reset } from '../features/auth/authSlice';
function Register() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    password2:""
  })

  const {name, email, password, password2} = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {admin = undefined, isError, isSuccess, message } = useSelector((state)=> state.auth)

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess || admin) {
      navigate('/')
    }
    dispatch(reset())
  },[admin, isError, message, isSuccess, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2){
      toast.error('Password do not match')
    }else{
      const adminData = {
        name, email, password
      }

      dispatch(register(adminData))
    }
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