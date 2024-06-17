import React from 'react';
import Typical from 'react-typical';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz ">

            <a href="https://www.youtube.com/watch?v=ilw_g_rxtVc">
            <i class="bi bi-youtube"></i>
            </a>

            <a href="https://www.linkedin.com/in/abongile-tshopi-05b594169/#">
            <i class="bi bi-linkedin"></i>
            </a>

            <a href="https://github.com/214254151">
              <i class="bi bi-github"></i>
            </a>




            <i className='fa fa-facebook-square'></i>
            <i className='fa fa-instagram'></i>
             
             
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
                {" "}
                Hello, I'M <span className="highlighted-text">Abongile</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
                {" "}
                <h1>
                <Typical
                loop={Infinity}
                steps={[
                    "Enthusiastic Dev", 
                    1900, 
                    "UI/UX Designer",
                    1900,
                    "Full Stack Developer ", 
                    1900, 
                    "Cross Platform Dev", 
                    1900, 
                    "React/Angular Dev", 
                    1900, 
                    "Java Developer", 
                    1900, 
                    
                ]}
                />
                </h1>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

// "react-typical": "^0.1.0",