import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            I am currently pursuing a degree in Computer Science Engineering
            (CSE). As a passionate full-stack web developer, I specialize in
            building dynamic and responsive web applications. My expertise
            includes front-end technologies like React and backend technologies
            like Express. I have experience with integrating payment systems
            such as paypal and managing databases with MongoDB. I'm always eager
            to learn new technologies and improve my skills in creating
            efficient, scalable, and user-friendly web applications.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
