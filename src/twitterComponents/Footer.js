import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="services">
        <h4 className="serv">Services</h4>
        <div className="atag">
          <Link to="/">Check microphone</Link>
        </div>
        <div className="atag">
          <Link to="/sound">Check Speaker</Link>
        </div>
      </div>
      <div>
        <h4>Feedback</h4>
        <div className="text">
          We are trying to create the best tool for testing
          <br /> media devices, so if you have any feedback or
          <br /> ideas, please <Link to="/feedback">write to us.</Link><br/>
          Created by shubham yadav
        </div>
      </div>
    </div>
  );
}

export default Footer;
