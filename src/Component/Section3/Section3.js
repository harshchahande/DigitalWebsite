import React from "react";
import Button from "../Button/Button";
// import "./"
import "./Section3.css"

import S3_dImg from "../Assest/slide1.webp";

const Section3 = () => {
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <div className="section_Dimg">
            <img src={S3_dImg} alt="" />
          </div>
        </div>

        <div className="col-lg pt-5">
          <h1 className="section_h1 text-start">about </h1>
          <h2 className="section_h2 text-start">
            {" "}
            We believe in quality of our work
          </h2>

          <p className="text-start">
          Digital Media Ads is an organization that serves many dimensions of Web industry globally.
          </p>
          <p className="text-start">
          Come and grow with us. Currently, we have a huge number of clients in many different countries. With more than 90+ projects finished, we are thriving. We provide a road map of everything that you will need to fulfill your business goal. Your success is our responsibility now. So no more waiting, Get connected to us now. With our help, the best online digital marketing company in Hyderabad make your dream come true.
          </p>
          <div className="text-start">
            <Button title="by"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Section3;
