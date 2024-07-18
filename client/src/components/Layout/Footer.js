import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/Policy">Policy</Link>
    </div>
  );
};

export default Footer;
