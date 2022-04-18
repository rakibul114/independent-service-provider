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
              <button type="button"
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
                data-bs-slide-to="2"
                aria-label="Slide 3"
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
                        <h2>Person One</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Perferendis, aliquam!
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
                        <h2>Person Two</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Perferendis, aliquam!
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
                        <h2>Person Three</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Perferendis, aliquam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <img src={user4} alt="" />
                      </div>
                      <div className="img-text">
                        <h2>Person Four</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Perferendis, aliquam!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <img src={user5} alt="" />
                      </div>
                      <div className="img-text">
                        <h2>Person Five</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Perferendis, aliquam!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <img src={user6} alt="" />
                      </div>
                      <div className="img-text">
                        <h2>Person Six</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Perferendis, aliquam!
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
