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
                    1000, 
                    "Full Stack Developer ", 
                    1000, 
                    "Cross Platform Dev", 
                    1000, 
                    "React/Angular Dev", 
                    1000, 
                    "Java Developer", 
                    1000, 
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