import React from 'react'
import SignUp from '../SignUp/SignUp'
import { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const login = async() => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
       email : email,
       password : password
        })

        if(response.data.success){
            toast.success(response.data.message)
      
            localStorage.setItem('currentUser', JSON.stringify(response.data.data))
      
            toast.loading('Redirecting to dashboard...')
      
//after 3000 this time the page redirect on this page
setTimeout(()=>{
    window.location.href = '/farmerpage'
  }, 3000)
 }else{
   toast.error(response.data.message)
 }
 }
  return (
    <div>
        <h1 className='heading'>Login</h1>
        <form className='form-container'>
      <input
          type='email'
          placeholder='Email'
          className='input-box'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

<input
          type='text'
          placeholder='Password'
          className='input-box'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

 <button type='button' 
            className='btn1'
          onClick={login}
            >Login</button>
              <Link to='/signup'><span className='link'>Don't have an account? Signup</span></Link>
      </form>

    

      <Toaster/>
    </div>
  )
}

export default Login