import React,{useState} from 'react'
import "./AddVegetables.css"
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'


function AddVegetables() {

  const [name,setName] = useState("")
  const [price,setPrice] = useState(0)
  const [description,setDescription] = useState("")
  const [image,setImage] =useState("")


  const addPlant = async ()=>{
    toast.loading("Adding Vegetable.......")
    if(!name || !price || !description || !image){
      toast.error("plaese enter all detail")

      return
  }

  const response = await axios.post(`${process.env.REACT_APP_API_URL}/vegetable`, {
    name:name,
    price:price,
    image:image,
    description:description,
  })

  toast.dismiss()

  toast.success(response.data.message)

  setName("")
  setPrice("")
  setDescription("")
  setImage("")

  setTimeout(() => {
    window.location.href = '/'
  }, 2000)
 }





  return (
    <div>
           <h1>Add Vegitable</h1>

<form className='form-container'>
    <input type='text'
    placeholder='Enter Plant Name'
    className='plant-input-box'
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />


<input type='number'
    placeholder='Enter Plant Price'
    className='plant-input-box'
    value={price}
    onChange={(e)=>setPrice(e.target.value)}
    />

<input type='text'
    placeholder='Enter Plant Description'
    className='plant-input-box'
    value={description}
    onChange={(e)=>setDescription(e.target.value)}
    />

<img className='search-plant-img' src={image}></img>
<input type='text'
    placeholder='Enter Plant Image Url'
    className='plant-input-box'
    value={image}
    onChange={(e)=>setImage(e.target.value)}
    />


<button type='button' onClick={addPlant} className='add-plant-btn'>Add Plant</button>

</form> 

<Link to="/" className='back'><h1>👈Back to Home</h1></Link>
<Toaster/>

    </div>
  )
}

export default AddVegetables