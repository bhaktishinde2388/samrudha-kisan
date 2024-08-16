import React, { useState } from 'react'
import "./SignUp.css"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

function SignUp() {
    
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    dob: ''
  })

const signup = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
          fullName: user.fullName,
          email: user.email,
          password: user.password,
          dob: user.dob
})

if(response.data.success){
          toast.success(response.data.message)
    
          setUser({
            fullName: '',
            email: '',
            password: '',
            dob: ''
          })
        }
        else{
          toast.error(response.data.message)
        }
      }

  return (
    <div>
     <h1 className='heading'>User Registration</h1>
     
     <form className='form-container'>
            <input type="text"
             placeholder="Enter Full Name"
              className='input-box'
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value})}
            
            />


            <input type='date'
             placeholder='Enter Date Of Birth'
              className='input-box'
              value={user.dob}
              onChange={(e) => setUser({ ...user, dob: e.target.value})}
              />


            <input type='email'
             placeholder='Enter Email' 
              className='input-box'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value})}
              
              />


            <input type='text' 
            placeholder='Enter Password'
              className='input-box'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value})}
             
              />

            <button type='button' 
            className='btn1'  
            onClick={signup}        
            >Register</button>

<Link to='/login' className='signup'>Already have an account? Login</Link>
            </form>
            <Toaster />
        </div>
  )
}

export default SignUp