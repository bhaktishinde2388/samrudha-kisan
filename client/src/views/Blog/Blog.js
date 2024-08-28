import {blog} from "../../data";
import Navbar from "../../components/Navbar/Navbar"
import BlogCards from "../../components/BlogCards/BlogCards"
import BlogView from "./../BlogView/BlogView"

import "./Blog.css"
const Blog =()=>
    {
       
        return(
            <>

            <Navbar/>
            
            <div className="blog-container">
            {
                blog.map((blogObject, i) => {
                  const {
                    id,
                    title,
                    content,
                    author,
                    date
                  } = blogObject

                  return(
                   <BlogCards
                   id={id}
                   key={i}
                   title={title}
                   content={content}
                   author={author}
                   date={date}
                  
                   />
                  )
                }
            
            )
            }
            </div>



          
            </>
        )
    }
   
 export default Blog