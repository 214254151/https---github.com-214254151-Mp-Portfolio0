import React, { useState, useEffect } from "react";
import ScrollService from "../../utilities/ScollService";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Animations from "../../utilities/Animations";


const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // Creating reusable components
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
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
    );
  };

  // Static resume data for the labels
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  // Skills listing
  const programmingSkillsDetails = [
    { skill: "Figma", ratingPercentage: 89 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 69 },
    { skill: "Node JS", ratingPercentage: 60 },
    { skill: "Java", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 60 },
    { skill: "MongoDB", ratingPercentage: 75 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Mobile E-shop",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "An ecommerce application designed to sell products online with payment system integration",
      subHeading: "Technologies Used: React Native, Mongo DB, Express JS, Node JS, Redux.",
    },
    {
      title: "Ecommerce Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Online ecommerce website for showcasing and selling products online with payment system integration, both Paypal and Stripe",
      subHeading: "Technologies Used: Mongo DB, Express JS, React JS, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Cape Peninsula University of Technology, South Africa"}
        subHeading={"Diploma in ICT Application Development"}
        fromDate={"2020"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Brandenburg University of Applied Science"}
        subHeading={"Enterprise Resource Planning with SAP S/4HANA (TS410)"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Cape Peninsula University of Technology, South Africa"}
        subHeading={"NQF Level 5 in ICT"}
        fromDate={"2017"}
        toDate={"2018"}
      />
    </div>,

    // Work Experience
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Capaciti"}
        subHeading={"Web/Mobile Developer Intern"}
        fromDate={"2024"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          I was responsible for developing a website for a client using React JS, Node JS, Bootstrap icons, and Firebase.
        </span>
        <br />
        <span className="resume-description-text">
          I stretch my mental capacity by developing UI/UX per the given designs.
        </span>
      </div>
    </div>,

    // Programming Skills
    <div className="resume-screen-container programming-skills-container" key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    // Projects
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((project, index) => (
        <ResumeHeading
          key={index}
          heading={project.title}
          subHeading={project.subHeading}
          description={project.description}
          fromDate={project.duration.fromDate}
          toDate={project.duration.toDate}
        />
      ))}
    </div>,

    // Interests
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a coder, I also love teaching."
      />
      <ResumeHeading
        heading="Music"
        description="In my spare time, I love producing music using a license-free software named Fruity Loops."
      />
      <ResumeHeading
        heading="Entertainment"
        description="I also love playing video games and watching movies. Animation production is also in my interest fields."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offSetHeight = 360;

    let newCarousalOffSet = {
      style: { transform: "translateY(" + index * offSetHeight * -1 + "px)" },
    };

    setCarousalOffSetStyle(newCarousalOffSet);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
        key={index}
      >
        <img
          className="bullet-icon"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="Oops... no internet connection"
        />
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icon"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
