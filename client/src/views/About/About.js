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
 Samriddhi Kisan is an app that we have made for vegetable sellers, in which the farmer can upload the photos of his vegetables and the price etc. and then when the customer visits this website, he can click on it and get it.  He can order whatever vegetable he wants, so what happens is that the consumer directly contacts the farmers and buys the vegetables.
 <br></br> Our main objective behind this is that the farmer should get a good profit for his hard work.</p>
      
       
            </>
        )
    }


    export default About