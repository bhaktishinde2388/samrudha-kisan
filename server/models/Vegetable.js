import { Schema, model } from "mongoose"

const vegetableSchema = new Schema({
    name:String,
    price:Number,
    image:String,
    description:String
}, {
    timestamps:true
})

const Vegetable = model("Vegetable",vegetableSchema)

export default Vegetable