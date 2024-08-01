import React from "react";
import web from "../img/services/web.svg";
import dm from "../img/services/dm.svg";
import seo from "../img/services/seo.svg";

import Ser from "./Ser";
const About = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center fw-bold display-4">Our Services</h1>
        <hr className="hr-row mx-auto mb-4" />
        <div className="row">
          <Ser
            s_title={"Web Development"}
            s_img={web}
            s_text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis nobis accusamus accusantium voluptatem aperiam provident esse quas odio eum."
            }
          />

          <Ser
            s_title={"Digital Marketing"}
            s_img={dm}
            s_text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis nobis accusamus accusantium voluptatem aperiam provident esse quas odio eum."
            }
          />
          <Ser
            s_title={"Search Engine Optimization"}
            s_img={seo}
            s_text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis nobis accusamus accusantium voluptatem aperiam provident esse quas odio eum."
            }
          />
        </div>
      </div>
    </>
  );
};

export default About;
