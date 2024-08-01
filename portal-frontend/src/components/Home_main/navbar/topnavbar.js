import React from "react";
import { FiGithub } from "react-icons/fi";
// import "../../styles.css";
import {
  MdCloudQueue,
  MdOutlineBookmarkAdded,
  MdOutlineLogin,
  MdLogout
} from "react-icons/md";
import { FiSmile } from "react-icons/fi";
export default () => {
  return (
    <>
      <div className="top-navbar">
        <div>
          <b className="logo">
            {" "}
            <FiSmile /> L
          </b>
          {/* <b>
            {" "}
            <FiGithub className="sm" /> Github Profile
          </b>
          <b>
            <MdCloudQueue className="sm" /> google cloud
          </b>
          <b>
            {" "}
            <MdOutlineBookmarkAdded className="sm" /> achivements
          </b> */}
        </div>
        <div className="authSection">
          <b>
            SignIn <MdOutlineLogin className="sm" />{" "}
          </b>
          <b>|</b>{" "}
          <b>
            Logout
            <MdLogout className="sm" />
          </b>
          <div>
            <b className="avatar"></b>
            <div className="hide">
              <div>
                <b className="avatar"></b>
                <strong>Laxmikant varkal</strong>
              </div>
              <b>varkallaxmiknat62@gmail.com</b>

              <button>Admin</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
