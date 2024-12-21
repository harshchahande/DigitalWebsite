import React from "react";
import Slider from "react-slick";

import img1 from "../Assest/browser.png";
import roket from "../Assest/rocket.png";
import loss from "../Assest/loss.png";
import clock from "../Assest/clock.png";

import "../Slider/Slider.css";

const SliderComponent = () => {
  // Slider settings
  const settings = {
    dots: false, // Show dots below the slider
    infinite: true, // Loop slides infinitely
    speed: 500, // Speed of transition (500ms)
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Auto-slide the slides
    autoplaySpeed: 2000, // Time between auto-slides (2000ms = 2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "50px" }}>
      {/* <h2> My Slider </h2> */}
      <Slider {...settings}>
        <div>
          <div className="text-start  p-3">
            <div className="border p-3">
              <img src={img1} alt="" className="slider1_img" />

              <h2>Web Development </h2>
              <p>
                Our techie team has decades of combined experience creating
                completely custom websites with WordPress, Shopify, and HubSpot.
                We can conjure up a beautiful website for you, whether you’re a
                startup or a well-established business.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-start  p-3">
            <div className="border p-3">
              <img src={clock} alt="" className="slider1_img" />

              <h2> Search Engine Optimization </h2>
              <p>
                Building a new website for your business or redesigning an old
                one can be a daunting task. Every business owner needs a web
                development company in Hyderabad to help them build an online
                presence through their website.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-start  p-3">
            <div className="border p-3">
              <img src={roket} alt="" className="slider1_img" />

              <h2> Pay Per Click </h2>
              <p>
                PPC means a paid promotion that is used to generate leads who
                are ready to buy something right away. ODM agency provides Best
                PPC Service in Hyderabad campaigns that utilise paid search to
                create immediate sales and targeted leads for your company. Our
                tech-enabled PPC services will help you achieve your goals and
                maximise your ROI, whether you want to increase leads, website
                traffic, or both.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-start  p-3">
            <div className="border p-3">
              <img src={loss} alt="" className="slider1_img" />

              <h2> Social Media Marketing </h2>
              <p>
                Our approach to Social Media Marketing at ODM is unique from any
                other local agency. Our omnichannel approach is critical in
                today’s ever-changing digital landscape. Our social media
                consultants are true practitioners who are constantly testing
                and learning in order to maximise the client’s budgets and ROI
                from social media campaigns.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
