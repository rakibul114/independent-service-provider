import React from "react";
import "./About.css";
import aboutPic from "../../images/about.jpeg";

const About = () => {
  return (
    <div>
      <div className="title-bar d-flex align-items-center mt-5">
        <hr className="horizon-bar me-1" />
        <h1>ABOUT ME</h1>
        <hr className="horizon-bar ms-1"/>
      </div>
      <div className="container d-flex justify-content-around">
        <img className="about-pic shadow" src={aboutPic} alt="" />
        <div className="about-info shadow">
          <h3>About Me</h3>
          <p>
            I am trying to get a skill in website development. I got enrolled at
            Programming Hero to learn and achieve my goal. I made a daily
            routine for my everyday module practice and I strictly follow the
            routine. I want to start my career as a Frontend Web Developer at
            the beginning of my journey and then I will keep practicing to
            sharpen my skill and develop my Backend development skill as well.
            No matter how many problems appear in my daily life, I try to be
            focused on my new career track.
          </p>
          <p>
            <i>MD. Rakibul Islam</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
