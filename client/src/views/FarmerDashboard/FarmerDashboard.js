import React from 'react'
import "./FarmerDashboard.css"
import { useEffect,useState} from 'react'
import toast, {Toaster} from 'react-hot-toast'
import Add from "./add (1).png"
import {Link} from "react-router-dom"
import AddVegetables from '../AddVegetables/AddVegetables'

function FarmerDashboard() {
    const [user,setUser]=useState('')


    //farmer

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if(currentUser){
          setUser(currentUser)
        }
        
        
        if(!currentUser){
          window.location.href='/login'
        }
        },[])
        
  return (
    <div>
         <h1 className='user-greeting'>Hello.... <span className='user-greeting-name'>🙏{user.fullName}🙏</span></h1>
      <h3 className='heading'>अब हर किसान बढेगा!!👩‍🌾👨‍🌾
        <br>
        </br>
        अपने श्रम का अच्छा मोल पाऐगा!!
      </h3>


{/* logout */}
      <span className='logout'
      onClick={()=>{
        localStorage.clear()
        toast.success("logout successfully")
        setTimeout(()=>{
          window.location.href = '/login'
        }, 2000)
      }}
      
      >Logout</span>

      <div className='add-img-link-container d-flex flex-wrap justify-content-evenly '>
        <h1 className='about'>
          click here for adding your vegetables👇
        </h1>
        
     
        <Link to="/add">
      <img src={Add} className='add-img'/>
      </Link>
      </div>

      <Toaster/>
    </div>
  )
}

export default FarmerDashboard