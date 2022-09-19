import { HomeRounded, Telegram } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import ImageIcon from '@mui/icons-material/Image';

import "./Header.scss";

const Header = (props) => {
  const location = useLocation(); 
const pathName=location.pathname
console.log(pathName);
  return (
    <Navbar expand="lg"  className="header">
      {/* Home link */}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
         
          <ImageIcon/>
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left" >
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/resume"
            className={pathName === "/resume" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
            {/* Contact Link */}
            <Nav.Link
            as={NavLink}
            to={"/contact"}
            className={
              pathName === "/contact" ? "header_link_active" : "header_link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key, idx) => (
            <a
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="header_socials"
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
          <a href="#contact" className="a_nostyles">
            <CustomButton text={"Hire Me"} icon={<Telegram />} />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
