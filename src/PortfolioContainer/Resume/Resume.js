import React, { useState } from "react";
import ScrollService from "../../utilities/ScollService";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Animations from "../../utilities/Animations";



export default function Resume(props) {
  const [selectBulletIndex, setSelectBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarausalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
        <span>{props.heading ? props.heading :  ""}</span>
        {props.fromDate && props.toDate ?(
          <dov className="haeding-date">
            {props.fromDate + "_" + props.toDate}
          </dov>
        ): (
          <div></div>
        )}

        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>

        </div>
      </div>
    </div>
  };

  const resumeBullets = [ 
      { label: "Education", icon: "education.svg"},
      { label: "Work History", icon: "work-history.svg"},
      { label: "Programming Skills", icon: "programming-skills.svg"},
      { label: "Projects", icon: "projects.svg"},
      { label: "Intrests", icon: "inerests.svg"},
    ];
    
    const programmingSkillsDetails = [
      {skill: "Figma", ratingPercentage: 89},
      {skill: "HTML", ratingPercentage: 85},
      {skill: "CSS", ratingPercentage: 90},
      {skill: "JavaScript", ratingPercentage: 70},
      {skill: "React JS", ratingPercentage: 69},
      {skill: "Node JS", ratingPercentage: 60},
      {skill: "Java", ratingPercentage: 85},
      {skill: "", ratingPercentage: 75},
      {skill: "Python", ratingPercentage: 60},
      {skill: "MongoDB", ratingPercentage: 75},
    ]
  
    const projectDetails[
      {
        title: "Personal website",
        duration: {fromDate: "2023", toDate: "2024"},
        description: "A personal website to showcase all my education and skills at one place",
        subHeading: "Technologies used: React JS, Node JS",
      },


    ];

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return
  (
     <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-conent">
        <ScreenHeading title = {"Resume"} subHeading= {"My Formal Bio detalis"}/>
        </div>    
    </div>
   );
}
