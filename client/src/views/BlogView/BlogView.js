import { useParams } from "react-router-dom"
import "./BlogView.css"
import {blog} from "../../data";

import Navbar from "../../components/Navbar/Navbar";
function BlogView ()
    {
        const {id} = useParams()

        const select = blog.find((blogObject) =>{
            if (blogObject.id == id)
                {
                    return true
                }

                else{
                   return false
                }
            })

            console.log(select)

        return(
            <>
            <Navbar/>
            <div className="blogs-container">
            <h1>{select.title} </h1>
            <p className="blog-date-author">
                {select.author.name} | {select.date}
            </p>
            <p  className="blog-content">
                {select.content}
            </p>
          
            </div>
          
            </>
           
        )
    }
  
    export default BlogView