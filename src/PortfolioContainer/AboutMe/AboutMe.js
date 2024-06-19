import React, {useEffect} from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScollService"; 
import Animations from "../../utilities/Animations";

export default function AboutMe(props){
    return(
        <div className="about-me-conatner screen-container">
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>

            </div>

        </div>
    )
}