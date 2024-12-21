import React from "react";
import Section1 from "../Assest/slide1.webp";

const Section6 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg pt-5">
          <h1 className="section_h1 text-start">strategy</h1>
          <h2 className="section_h2 text-start">
            {" "}
            Extensive Expertise In Creating Customized Strategies
          </h2>

          <p className="text-start">
            We would love to chat with you. Feel free to reach out to grow your
            business
          </p>
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img src="..." alt="..." />
            </div>
            <div class="flex-grow-1 ms-3 text-start">
              <h3>Strategies To Reach Your Customers</h3>
              <p>
                We provide good customer experiences through relevant content,
                services, and technology that align with your business
                objectives.
              </p>
            </div>
          </div>
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img src="..." alt="..." />
            </div>
            <div class="flex-grow-1 ms-3 text-start">
              <h3>Lead Generation & Success</h3>
              <p>
              Our team of professionals collaborates with clients to develop a customized lead generation strategy that meets their objectives and budget.
              </p>
            </div>
          </div>
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img src="..." alt="..." />
            </div>
            <div class="flex-grow-1 ms-3 text-start">
              <h3>Analysing Goals & Delivering Results</h3>
              <p>
              Our team excels at what they do, with a proven track record of successful campaigns and delighted clients.
              </p>
            </div>
          </div>
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img src="..." alt="..." />
            </div>
            <div class="flex-grow-1 ms-3 text-start">
              <h3>Scale Your Business With Ease</h3>
              <p>
              We've assisted well-known brands in scaling smoothly. Businesses can expand with us without having to move agencies anytime soon.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg">
          <div className="section_Dimg">
            <img src={Section1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
