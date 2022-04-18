import React from "react";
import './Testimonial.css';

import user1 from '../../images/user1.jpg';
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
import user4 from "../../images/user4.jpg";
import user5 from "../../images/user5.jpg";
import user6 from "../../images/user6.jpg";

const Testimonial = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <img src={user1} alt="" />
                      </div>
                      <div className="img-text">
                        <h2>Monir Hossain</h2>
                        <p>
                          The expert tips and on time delivery of vouchers along
                          with timely updates - each and everything was taken
                          care of!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <img src={user2} alt="" />
                      </div>
                      <div className="img-text">
                        <h2>Afroza Khatun</h2>
                        <p>
                          His service is really great. I caught everything on
                          time from beginning to the end. I strongly suggest to
                          everyone to test his travel management.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <img src={user3} alt="" />
                      </div>
                      <div className="img-text">
                        <h2>Shormili Begum</h2>
                        <p>
                          I am really please to make a short tour with Moon
                          Travel. Rakib is really very helpful to provide any
                          type of information. I highly recommend to anyone to
                          explore his service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
