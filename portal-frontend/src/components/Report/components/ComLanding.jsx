import React from "react";

const ComLanding = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 m-lg-auto my-5 order-md-1 order-2">
            <h1 className="fw-bold display-2 text-center">{props.title}</h1>
            <hr className="hr-row mx-auto mb-4" />

            <p>{props.text}</p>
          </div>
          <div className="col-12 col-sm-6 col-md-6 m-auto order-md-2 order-1">
            <img src={props.img} alt={props.img} className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComLanding;
