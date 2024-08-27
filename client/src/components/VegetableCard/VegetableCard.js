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
    <div className='main'>
    <div className='card-container'> 

    
     <img className="plant-image" src={image} />
    

    
        <h1 className="plant-name">{name}</h1>
      
      
        <span className='plant-price'>{price}Rs</span>
        <p className='plant-description'>{description}</p>
        
       
       
      <div>
        <Link to={`/update/${_id}`}>
       <img src={UpdateImg} className='card-btn update' />
       </Link>
      
       <img src={DeleteImg} className='card-btn delete' onClick={()=>{
        deleteVegetable(_id)
       }}/>

<Link to="/order">
       <button type='button' className='order-btn'>Order Now</button>
       </Link>
       </div>
    </div>
    </div>
  )
}

export default VegetableCard