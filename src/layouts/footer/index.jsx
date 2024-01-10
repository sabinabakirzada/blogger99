import React from "react";
import "./index.scss";
import {
  FaRegHeart,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <p>
          Copyright ©2023 All rights reserved | This template is made with{" "}
          <FaRegHeart className="icon" /> by{" "}
          <span className="icon">Colorlib</span>
        </p>

        <p></p>
      </div>
      <div className="footer-right">
        <p className="p">
          <FaFacebookF />{" "}
        </p>
        <p>
          <FaTwitter />
        </p>
        <p>
          <FaDribbble />
        </p>
        <p>
          <FaBehance />
        </p>
      </div>
    </div>
  );
};

export default Footer;
