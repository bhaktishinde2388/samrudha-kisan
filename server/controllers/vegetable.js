import Vegetable from "../models/Vegetable.js";


const postVegetable = async (req,res)=>{
    const {name,
        image,
        price,
        description
    } = req.body

    const newVegetable = new Vegetable({
        name:name,
        image:image,
        price:price,
        description:description
})  

const savedVegetable = await newVegetable.save();

res.json({
    success:true,
    data:savedVegetable,
    message:"new vegetable added successfully"
})
}


const getVegetables = async (req,res)=>
    {
      const allVegetables = await Vegetable.find().sort({createdAt: -1})

        res.json({
            success:true,
            data:allVegetables,
            message:"all vegetables fetch successfully"
        })
    }


    const getVegetableId = async (req,res)=>{
        const {id} = req.params
    
        const vegetable = await Vegetable.findOne({
            _id:id
        })
        res.json({
            success:vegetable ? true : false,
            data:vegetable,
            message: vegetable ? "vegetable fetch successfully" : "vegetable not found"
        })
    }
    


    //update
const putVegetableId = async (req,res)=>
    {
    const {
        name,
        image,
        price,
        description
    } = req.body
    
        const {id} = req.params
    
await Vegetable.updateOne({_id:id},
    {
        $set: {
            name:name,
            image:image,
            price:price,            
            description:description
}})

const updatedVegetable = await Vegetable.findById(id)

res.json({
    success:true,
    message:"vegetable updated successfully",
    data:updatedVegetable
})

    }

const deleteVegetableId = async  (req,res) =>{

    const  {id} = req.params
     
    await Vegetable.deleteOne({
        _id: id
    })
        res.json({
            success : true,
            message : "vegetable delete successfully",
            data :null
        })
    }




export {postVegetable,
    getVegetables,
    getVegetableId,
    putVegetableId,
    deleteVegetableId
}