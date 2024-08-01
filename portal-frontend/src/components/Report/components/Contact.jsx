import React from "react";
import ComLanding from "./ComLanding";
import img from "../img/contact.svg";
import q_s from "../img/qs.svg";
import q_u from "../img/qu.svg";
import LeftText from "./LeftText";
import RightText from "./RightText";
import Footer from "./Footer";
import "../css/style.css";

const Contact = () => {
  return (
    <>
      <ComLanding
        title={"Contact Us"}
        img={img}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis nobis accusamus accusantium voluptatem aperiam provident esse quas odio eum."
        }
      />
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

export default Contact;
