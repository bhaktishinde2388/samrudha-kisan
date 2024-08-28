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
import About from './views/About/About.js'
import Blog from "./views/Blog/Blog"
import BlogView from "./views/BlogView/BlogView";

const root=ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
    path:'/',
    element:<Home />
},
{
    path:'/about',
    element:<About />
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
    path : "/Blog",
    element:<Blog/>
},

{
    path : "/BlogView/:id",
    element :  <BlogView/>
},
{
    path:"*",
    element:<h1 >404.. Sorry
        page not found </h1>
}

])

root.render(<RouterProvider router={router}/>)

