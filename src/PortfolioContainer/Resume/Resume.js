import React, { useState } from "react";
import ScrollService from "../../utilities/ScollService";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Animations from "../../utilities/Animations";
import Resume from "../PortfolioContainer/Resume/Resume"

export default function Resume(props) {
  const [selectBulletIndex, setSelectBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarausalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return
  (
     <div className="resume-container screen-contaier">
    <div className="resume-conent">
        <ScreenHeading title = {"Resume"} subHeading= {"My Formal Bio detalis"}/>
        </div>    
    </div>
   )
}
