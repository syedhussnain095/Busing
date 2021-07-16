import React from "react";
import aboutone from "../images/aboutone.jpg";
const AboutTeamEfforts = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="col-10 mx-auto py-5">
          <div className="row">
            <div className="col-lg-6 col-xl-5">
              <div className="about_effort_content">
                <h2>Provide the best solutions with great team effort</h2>
                <p>
                  Seed money optimized for social sharing channelizing fords
                  brand awareness granular thought Lorem ipsum is dummy
                  leadership. Engagement tweeds native contente drone. Hit the
                  like button CPM holistic content marketing responsive. Viral
                  native content is an ahammad long-tail chatvertizing
                  engagement. Scalability
                </p>
                <button className="for_learn_more">Learn More</button>
              </div>
            </div>
            <div className="col-lg-6 col-xl-7 ">
                <div className="marketing_about_thumb">
              <img src={aboutone} className="fit_image" alt={aboutone} />
              <div className="play_buttn">
                  <div className="btn_play">
                  <i class="fas fa-play"></i>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeamEfforts;
