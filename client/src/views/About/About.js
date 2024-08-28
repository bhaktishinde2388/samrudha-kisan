import Navbar from "../../components/Navbar/Navbar"
import "./../About/About.css"


const About = ({abotText}) =>
    {
        return(
            <>
        <Navbar/>
        <h1 className="about-heading">ABOUT US</h1>
        <p className="aboutText" >❤🤍WELCOME TO SAMRUDHA KISAN🤍❤<br></br>
                    
           🧡🤍💚IND
       
 <br></br>
 SAMRUDHA KISAN is leading supplier of vegetables.
        Shop No 9, Marketyard, Ganesh Nagar, Sangamner, Maharashtra 422605
        Market Yard, Sangamner, Sangamner - 422605</p>
        <img className="store-img" src="https://lh3.googleusercontent.com/p/AF1QipO9eHQUZRejhDK_Yu5Q-Kd30ajeobL09QutEm25=s680-w680-h510"/>
       
            </>
        )
    }


    export default About