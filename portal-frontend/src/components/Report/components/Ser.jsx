import React from "react";
const About = (props) => {
  const style = {
    width: "100%",
    height: "250px"
  };
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 mx-auto my-2">
        <div className="card text-center">
          <div className="card-body">
            <img src={props.s_img} alt="" style={style} className="img-fluid" />
            <h1 className="fw-light">{props.s_title}</h1>
            <p>{props.s_text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
