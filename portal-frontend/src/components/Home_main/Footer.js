import React from "react";
import "../styles.css";
import * as BS from "react-icons/bs";
import * as FI from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer">
      <h1>Lucky</h1>

      <p>Copyright © 2022 Lucky. All rights reserved.</p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexFlow: "row wrap"
        }}
      >
        <button className="avatar">
          <a href="https://wa.me/9325750978">
            <BS.BsWhatsapp style={{ fontSize: "1.5rem", color: "black" }} />
          </a>
        </button>
        <button className="avatar">
          <a href="https://www.instagram.com/laxmikantvarkal32019/">
            <BS.BsInstagram style={{ fontSize: "1.5rem", color: "black" }} />
          </a>
        </button>
        <button className="avatar">
          <a href="https://www.facebook.com/ganesh.varkal.3">
            <FI.FiFacebook style={{ fontSize: "1.5rem", color: "black" }} />
          </a>
        </button>
        <button className="avatar">
          <a href="https://www.facebook.com/ganesh.varkal.3">
            <FI.FiTwitter style={{ fontSize: "1.5rem", color: "black" }} />
          </a>
        </button>
      </div>
    </div>
  );
};
export default Footer;
