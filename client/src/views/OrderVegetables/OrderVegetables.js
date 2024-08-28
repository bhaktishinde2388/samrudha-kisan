import React from 'react'
import { Link } from 'react-router-dom';
import Phonepay from "./icon/phonepay.png"
import Gpay from "./icon/Gpay.jpg"
import "./OrderVegetables.css"

function OrderVegetables() {
  return (
    <>
    <div className='order-card '>


       <span className='order-heading'> Order Now:</span>
       <br></br>
       <br></br>
       <div className='icons'>
        <Link to="https://play.google.com/store/apps/details/PhonePe_UPI_Payment_Recharge?id=com.phonepe.app&hl=en_US">
            <img src={Phonepay} height="50"className='icons' /></Link>
            
        <Link to="https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user&hl=en_US">
            <img src={Gpay} height="50" className='icons'/></Link>
            
            </div>
          
    </div>
      <h4 className='home-link'><Link to="home .html" target="_blank" >Go to home page</Link></h4>
      </>
  )
}

export default OrderVegetables