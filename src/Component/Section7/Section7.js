import React from "react";
import Section1 from "../Assest/slide1.webp";
import Button from "../Button/Button";

const Section7 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="section_Dimg">
              <img src={Section1} alt="" />
            </div>
          </div>
          <div className="col-lg pt-5">
            <h1 className="section_h1 text-start">Digital Media Ads </h1>
            <h2 className="section_h2 text-start">
              {" "}
              We Can Help You Boost Your Sales and ROI.
            </h2>

            <p className="text-start">
              We would love to chat with you. Feel free to reach out to grow
              your business
            </p>
            <input
              class="form-control form-control-lg my-4 rounded-pill"
              type="text"
              placeholder="You Name "
              aria-label=" example"
            />
            <input
              class="form-control form-control-lg mb-4 rounded-pill"
              type="text"
              placeholder="Phone Number "
              aria-label=" example"
            />
            <input
              class="form-control form-control-lg mb-4 rounded-pill"
              type="text"
              placeholder="You Email "
              aria-label=" example"
            />
            <input
              class="form-control form-control-lg mb-4 rounded-pill"
              type="text"
              placeholder="Choose Service "
              aria-label=" example"
            />

            <div className="text-start">
              <Button  title="man" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
