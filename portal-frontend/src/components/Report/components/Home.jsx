import React from "react";
import ComLanding from "./ComLanding";
import Services from "./services";
import img from "../img/home.svg";
import q_s from "../img/qs.svg";
import q_u from "../img/qu.svg";
import LeftText from "./LeftText";
import RightText from "./RightText";
import "../css/style.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <ComLanding
        img={img}
        title={"React Js"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis nobis accusamus accusantium voluptatem aperiam provident esse quas odio eum."
        }
      />
      <Services />
      <LeftText
        title={"Quick Service"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis nobis accusamus accusantium voluptatem aperiam provident esse quas odio eum."
        }
        img={q_u}
      />
      <RightText
        img={q_s}
        title={"Contact Us"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis nobis accusamus accusantium voluptatem aperiam provident esse quas odio eum."
        }
      />
      <Footer />
    </>
  );
};

export default Home;
