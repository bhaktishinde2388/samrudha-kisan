import  express, {json} from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();



import {postLogin, postSignup} from "./controllers/user.js"
import { deleteVegetableId, getVegetables, getVegetableId, postVegetable, putVegetableId } from "./controllers/vegetable.js";
import { pageNotFound } from "./controllers/error.js";


const app = express();
app.use(express.json());
app.use(cors());


// mongodb connection

const connectDB = async ()=>{
    const connection = await mongoose.connect(process.env.MONGO_URL)

    if (connection){
        console.log("mongoodb is connected successfully😄")
    }
    
};
connectDB();

//health route

app.get('/',(req,res)=>{
    res.json({
        message:`welcome to Expense Samrudha-Kisan`
    })
})

app.post('/login', postLogin)

app.post("/signup", postSignup)



app.post("/vegetable",postVegetable)
// read resourse
app.get("/vegetables",getVegetables)
//update specific field
app.get("/vegetable/:id",getVegetableId)
// this put  method is used for update
app.put("/vegetable/:id" , putVegetableId)
// detete endpoint call karnyasathi
app.delete("/vegetable/:id",deleteVegetableId)

app.use("*", pageNotFound)


const PORT= process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
})