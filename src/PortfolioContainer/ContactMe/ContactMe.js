import React from "react"
import "./ContactMe.css"
import imgBack from "../ContactMe/mailz.jpeg"
import load2 from "../ContactMe/load2.gif"
import ScrollService from "../../utilities/ScrollService"
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import Animations from "../../utilities/Animations"
import Typical from "react-typical"


export default function ContactMe(props){

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    return(
        <div className="main-container" id={props.id || ''}>
            <ScreenHeading
            title={"Contact Me"}
            subHeading={"Lets keep in touch"}/>
            <div className="contact-form">
            <div className="col">

            <h2 className="title">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Get in touch 📧",
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
            </div>
        </div>
    )
}