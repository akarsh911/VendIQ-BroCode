import React from "react";
import ComLanding from "./ComLanding";
import img from "../img/about.svg";
import Services from "./services";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <ComLanding
        title={"About Us"}
        img={img}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis nobis accusamus accusantium voluptatem aperiam provident esse quas odio eum."
        }
      />
      <Services />
      <Footer />
    </>
  );
};

export default About;
