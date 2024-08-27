import React from 'react'
import "./VegetableCard.css"
import UpdateImg from "./update.png"
import DeleteImg from "./delete.png"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import { Link } from 'react-router-dom';

// import { deleteVegetableId } from '../../../../server/controllers/vegetable';

function VegetableCard({_id,name,image,price,description,loadVegetables}) {


  
  const deleteVegetable  = async (vegetableId)=>{   
  const response =  await axios.delete(`${process.env.REACT_APP_API_URL}/vegetable/${vegetableId}`)
  toast.success(response.data.message)
  loadVegetables()



  }


  return (
   
    <div className='card-container'> 

    
     <img className="vegetable-image" src={image} />
    

    
        <h1 className="vegetable-name">{name}</h1>
      
      
        <span className='vegetable-price'>{price}Rs</span>
        <p className='vegetable-description'>{description}</p>
        
       
        <div className='order-btn-comtainer'> 
<Link to="/order">
       <button type='button' className='order-btn'>Order Now</button>
       </Link>
       </div>
      <div>
        {/* <Link to={`/update/${_id}`}>
       <img src={UpdateImg} className='card-btn update' />
       </Link>
      
       <img src={DeleteImg} className='card-btn delete' onClick={()=>{
        deleteVegetable(_id)
       }}/> */}

       </div>
    </div>
  
  )
}

export default VegetableCard