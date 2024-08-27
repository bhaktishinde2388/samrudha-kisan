import React from 'react'
import ReactDOM from "react-dom/client"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./views/Home/Home.js"
import "./global.css"
import Login from './views/Login/Login.js'
import SignUp from './views/SignUp/SignUp.js'
import FarmerDashboard from './views/FarmerDashboard/FarmerDashboard.js'
import AddVegetables from './views/AddVegetables/AddVegetables.js'
import OrderVegetables from './views/OrderVegetables/OrderVegetables.js'

const root=ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
    path:'/',
    element:<Home />
},
{
    path:"/login",
    element:<Login />
},
{
    path:"/signup",
    element:<SignUp/>
},
{
    path:"/farmerpage",
    element:<FarmerDashboard/>
},
{
    path:"/add",
    element:<AddVegetables/>
},
{
    path:"/order",
    element:<OrderVegetables/>
},

{
    path:"*",
    element:<h1 >404.. Sorry
        page not found </h1>
}

])

root.render(<RouterProvider router={router}/>)

