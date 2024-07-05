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
import { noAuto } from "@fortawesome/fontawesome-svg-core";


export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 15000,

        Responsive: {
            0: {
                items: 1,
            },
            768:{
                items: 1,
            },
            1000:{
                items: 3,
            },
        }
    }


  return (
    <div>
      <ScreenHeading title={"Projects"} subHeading={"Find out abour my "} />

      <section className="project-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="projects-carousel"{...options}>
              <div className="col-lg-12">
                <div className="projects-item">
                  <div className="project-description">
                    <p>
                      <i className="fa fa-quote-left" /> asdfasdfaghspify
                      apiyupwqyaepoqwyetgqw qwp otquowtytujhhhhhhhhhhhhh
                      hhhhhhhhhhhhhhhhh
                      hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                      hhhhhhhhhhhhhhhhh
                      hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                      hhhhhhhhhhhhhhhhhhhhhhhh
                      udfghjdfgjhdfgjdfgjsfgjdgfjdfgjdfgjdfgjdfgj
                      dfgjdfgjdfgj;oqwy ;wet{" "}
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
                      src="Figma.png"
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
                      src="Marvelaap.jpg"
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
                      src="python.png"
                      alt="no internet connection"
                    ></img>
                    <h5>Bank App</h5>
                    <p>Python banking app</p>
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
                      src="ps.png"
                      alt="no internet connection"
                    ></img>
                    <h5>Calculator</h5>
                    <p>Python finantial caltulator app</p>
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
                      src="react.png"
                      alt="no internet connection"
                    ></img>
                    <h5>Bakery app</h5>
                    <p>Bakery website showcasing Snesh's bakery products</p>
                  </div>
                </div>
                </div>

            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src= "shape-bg.png" alt= "footer image is not loading "/>
      </div>
    </div>
  );
}


