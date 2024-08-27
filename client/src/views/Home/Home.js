import React from 'react'
import {useState,useEffect } from "react"
import axios from "axios"
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar.js"
import VegetableCard from '../../components/VegetableCard/VegetableCard.js'
import toast, { Toaster } from 'react-hot-toast';


function Home() {

  const [vegetables , setVegetables] = useState([])

  const loadVegetables = async () => {
    toast.loading("Loading Plants.........")
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/vegetables`)
    
    toast.dismiss()
    toast.success("Plants Loaded Successfully........")
    
    setVegetables(response.data.data)
    }
    
    useEffect(()=>{
      loadVegetables()
    },[])

  return (
   
   <>
      <Navbar/>
     
      
      <div className='main'> 

      {
        //applied mapping on plants array
        vegetables.map((vegetable , i)=>{
            //destructured plant object
            const {
                _id,
                name,
                price,
                image,
                description,
              } = vegetable

            return <VegetableCard 
                   key={i}
                  _id={_id}
                   name={name}
                   price={price}
                   image={image}
                   description={description}
                   loadVegetables={loadVegetables}

            />
        })
       }
   </div>
   </>
  )
}


export default Home