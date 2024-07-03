import React from "react";
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css"


import Figma from "../../assets/img/projects/Figma.png"
import Marvelaap from "../../assets/img/projects/Marvelaap.jpg"
import ps from "../../assets/img/projects/ps.png"
import python from "../../assets/img/projects/python.png"
import react from "../../assets/img/projects/react.png"


export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div>
      <ScreenHeading title={"Projects"} subHeading={"Find out abour my "} />

      <section className="project-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="projects-carousel">
              <div className="col-lg-12">
                <div className="projects-item">
                  <div className="project-description">
                    <p>
                      <i className="fa fa-quote-left" /> asdfasdfaghspify
                      apiyupwqyaepoqwyetgqw qwp otquowty;oqwy ;wet{" "}
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="start list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-infor">
                    <img
                      src="../../assets/img/projects/Figma.png"
                      alt="no internet connection"
                    ></img>
                    <h5>Figma design</h5>
                    <p>Design prototype for a website</p>
                  </div>
                </div>
              </div>



              <div className="col-lg-12">
                <div className="projects-item">
                  <div className="project-description">
                    <p>
                      <i className="fa fa-quote-left" /> asdfasdfaghspify
                      apiyupwqyaepoqwyetgqw qwp otquowty;oqwy ;wet{" "}
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="start list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-infor">
                    <img
                      src="../../assets/img/projects/Marmelaap.jpg"
                      alt="no internet connection"
                    ></img>
                    <h5>MarvelApp design</h5>
                    <p>Design prototype for a restaurant App</p>
                  </div>
                </div>
              </div>



              <div className="col-lg-12">
                <div className="projects-item">
                  <div className="project-description">
                    <p>
                      <i className="fa fa-quote-left" /> asdfasdfaghspify
                      apiyupwqyaepoqwyetgqw qwp otquowty;oqwy ;wet{" "}
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="start list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-infor">
                    <img
                      src="../../assets/img/projects/pyhton.png"
                      alt="no internet connection"
                    ></img>
                    <h5>Bank App</h5>
                    <p>Python banking app</p>
                  </div>
                </div>
              </div><div className="col-lg-12">
                <div className="projects-item">
                  <div className="project-description">
                    <p>
                      <i className="fa fa-quote-left" /> asdfasdfaghspify
                      apiyupwqyaepoqwyetgqw qwp otquowty;oqwy ;wet{" "}
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="start list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>

                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>

                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="project-infor">
                    <img
                      src="../../assets/img/projects/ps.png"
                      alt="no internet connection"
                    ></img>
                    <h5>Calculator</h5>
                    <p>Python finantial caltulator app</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}


