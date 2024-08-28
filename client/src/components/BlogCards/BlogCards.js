import "./BlogCards.css";
import {Link} from "react-router-dom";
import BlogView from "../../views/BlogView/BlogView"

function BlogCards ({id,title,content,author,date})
{
    return(
        <Link  className="blog-card" to={`/BlogView/${id}`}>
            <h1 className="blog-title">{title}</h1>
            <p className="blog-content-preview">
                {content.substring(0,94)}.......
            </p>
            <div className="author-card">
                <img src={author.img} alt="img" className="author-img"/>
                <span className="author-name">{author.name}</span>
                <span className="blog-date">{date}</span>
            </div>

        </Link>
    )
}

export default BlogCards
