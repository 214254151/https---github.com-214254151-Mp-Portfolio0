import React, {useState} from "react"
import "./ContactMe.css"
import imgBack from "../ContactMe/mailz.jpeg"
import load2 from "../ContactMe/load2.gif"
import ScrollService from "../../utilities/ScrollService"
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import Animations from "../../utilities/Animations"
import Typical from "react-typical"
import { Send } from "react-bootstrap-icons"
import axios from "axios"
import { toast } from "react-toastify"



export default function ContactMe(props){

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [banner, setBanner] = useState("");
        const [boolean, setBoolean] = useState(false);

        const handleName = (e) =>{
            setName(e.target.value)
        };
        const handleMessage = (e) =>{
            setMessage(e.target.value)
        };
        const handleEmail = (e) =>{
            setEmail(e.target.value)
        };

        const submitForm = (e) =>{
          e.preventDefault();

          try{
               let data = {name, email, message};
               setBoolean(true);
               const res = axios.post(`/contact`, data)
            }
              catch(error)
              {
                console.log(error)
              };

          
          
         
        }

    return(
        <div className="main-container" id={props.id || ''}>
            <ScreenHeading
            title={"Contact Me"}
            subHeading={"Lets keep in touch"}/>
            <div className="central-form">
            <div className="col">

            <h2 className="title">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Lets connect 📧",
                    1900,
                    
                  ]}
                />
              </h2>
              <a href="https://www.youtube.com/watch?v=ilw_g_rxtVc">
              <i class="bi bi-youtube"></i>
            </a>

            <a href="https://www.linkedin.com/in/abongile-tshopi-05b594169/#">
              <i class="bi bi-linkedin"></i>
            </a>

            <a href="https://github.com/214254151">
              <i class="bi bi-github"></i>
              </a>
            </div>
            <div className="back-form">
                <div className="img-back">
                    <h4>Send your email here!</h4>
                    <img src={imgBack} alt="image not found"/>

                </div>
                <form onSubmit={submitForm}>
                    <p>{banner}</p>
                    <label htmlFor='name'>Name</label>
                    <input type="text"
                     onChange={handleName}
                     value={name}
                    />

                    <label htmlFor='email'>Email</label>
                    <input type="email"
                    onChange={handleEmail}
                    value={email}
                    />

                    <label htmlFor='message'>Message</label>
                    <textarea type="message"
                    onChange={handleMessage}
                    value={message}
                    />

                    <div className="send-btn">
                        <button type="submit">Send
                           

                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}