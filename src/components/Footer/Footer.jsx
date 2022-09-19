import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.scss";
import resumeData from "../../utils/resumeData";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
        © 2022  Developed by {''}
          <a 
          href="https://saidabbos.netlify.app/"
           target="_blank"
          rel="noopener noreferrer" 
          >
           Mr. Coder
          </a>
        
          
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
